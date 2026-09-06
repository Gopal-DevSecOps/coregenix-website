import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const BASE = "https://coregenix.in";
const API = `${BASE}/wp-json/wp/v2/posts`;
const IMG_DIR = join(import.meta.dirname, "..", "public", "images", "coregenix", "blog");
const OUT_FILE = join(import.meta.dirname, "..", "src", "data", "posts.ts");

async function fetchAllPosts() {
  const all = [];
  let page = 1;
  while (true) {
    const url = `${API}?per_page=100&page=${page}&_fields=id,title,content,excerpt,date,link,categories`;
    console.log(`  Fetching API page ${page}...`);
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) break;
    const data = await res.json();
    if (!data.length) break;
    all.push(...data);
    const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1");
    if (page >= totalPages) break;
    page++;
  }
  return all;
}

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<hr[^>]*>/gi, "\n---\n")
    .replace(/<li>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractParagraphs(html) {
  const paras = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = stripTags(m[1]).trim();
    if (text.length > 10) paras.push(text);
  }
  // Also extract h2 headings as separate paragraphs
  const hRe = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  while ((m = hRe.exec(html)) !== null) {
    const text = stripTags(m[1]).trim();
    if (text.length > 3) paras.push(text);
  }
  return paras;
}

function extractExcerpt(html) {
  // Get first meaningful paragraph
  const re = /<p[^>]*>([\s\S]*?)<\/p>/;
  const m = re.exec(html);
  if (m) {
    const text = stripTags(m[1]).trim();
    if (text.length > 20) return text.substring(0, 250) + (text.length > 250 ? "..." : "");
  }
  return "";
}

function slugFromUrl(url) {
  const parts = url.replace(BASE, "").split("/").filter(Boolean);
  return parts[0] || "";
}

async function downloadImage(url, filename) {
  const filepath = join(IMG_DIR, filename);
  if (existsSync(filepath)) return true;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buffer);
    return true;
  } catch {
    return false;
  }
}

function inferTag(title, content) {
  const t = (title + " " + content.join(" ")).toLowerCase();
  if (/\bsoar\b|security orchestration/i.test(t)) return "Cyber Security";
  if (/\bsiem\b|security information/i.test(t)) return "Cyber Security";
  if (/\bxdr\b|extended detection/i.test(t)) return "Cyber Security";
  if (/\bedr\b|endpoint detection/i.test(t)) return "Cyber Security";
  if (/\bendpoint security\b/i.test(t)) return "Cyber Security";
  if (/\bdata leak\b|data protection\b/i.test(t)) return "Cyber Security";
  if (/\bsoc\b|security operations center/i.test(t)) return "Cyber Security";
  if (/\bgrc\b|governance risk/i.test(t)) return "Compliance";
  if (/\bvapt\b|vulnerability assessment/i.test(t)) return "Cyber Security";
  if (/\bzero trust\b/i.test(t)) return "Cyber Security";
  if (/\bot security\b|operational technology/i.test(t)) return "OT Security";
  if (/\bmdm\b|mobile device/i.test(t)) return "Infrastructure";
  if (/\bon-premise|cloud vs hybrid/i.test(t)) return "Cloud";
  if (/\bstaff augmentation|facilities management/i.test(t)) return "Managed Services";
  if (/\bnetwork performance|network design/i.test(t)) return "Infrastructure";
  if (/\b2026 readiness|2026 challenges/i.test(t)) return "Infrastructure";
  if (/\bresilience|always-on/i.test(t)) return "Managed Services";
  if (/\bsme\b|small.*mid/i.test(t)) return "Cyber Security";
  if (/\bsecurity audit/i.test(t)) return "Cyber Security";
  if (/\bcybersecurity.*strategy/i.test(t)) return "Cyber Security";
  if (/\bfalse positive/i.test(t)) return "Cyber Security";
  if (/\battack surface/i.test(t)) return "Cyber Security";
  if (/\bincident response/i.test(t)) return "Cyber Security";
  if (/\bblind spot/i.test(t)) return "Infrastructure";
  if (/\bidentity perimeter\b|firewall.*identity/i.test(t)) return "Cyber Security";
  if (/\bgmail scam\b|impersonation/i.test(t)) return "Cyber Security";
  if (/\bnoc\b|network operations/i.test(t)) return "Managed Services";
  if (/\bbreach\b|click\b/i.test(t)) return "Cyber Security";
  return "Blog";
}

async function main() {
  console.log("=== Blog Migration (WordPress REST API) ===\n");

  // Step 1: Fetch all posts via API
  console.log("Step 1: Fetching posts from WordPress REST API...");
  const wpPosts = await fetchAllPosts();
  console.log(`  Fetched ${wpPosts.length} posts\n`);

  // Step 2: Ensure image directory
  await mkdir(IMG_DIR, { recursive: true });

  // Step 3: Process each post
  console.log("Step 2: Processing posts and downloading images...");
  const posts = [];

  for (let i = 0; i < wpPosts.length; i++) {
    const wp = wpPosts[i];
    const slug = slugFromUrl(wp.link);
    const title = stripTags(wp.title.rendered);
    const contentHtml = wp.content.rendered;
    const content = extractParagraphs(contentHtml);
    const excerpt = extractExcerpt(contentHtml);
    const date = new Date(wp.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const tag = inferTag(title, content);

    // Find og:image from link page (we already have the images from the first run, just reuse)
    let localImage = "/images/coregenix/blog/" + slug + ".png";
    // Check if image exists from first run
    const imgPath = join(IMG_DIR, slug + ".png");
    const imgPathJpg = join(IMG_DIR, slug + ".jpg");
    const imgPathJpeg = join(IMG_DIR, slug + ".jpeg");
    if (!existsSync(imgPath) && !existsSync(imgPathJpg) && !existsSync(imgPathJpeg)) {
      // Need to download from og:image - fetch the page to get it
      console.log(`  [${i + 1}/${wpPosts.length}] ${slug} - fetching image...`);
      try {
        const pageRes = await fetch(wp.link, { headers: { "User-Agent": "Mozilla/5.0" } });
        const pageHtml = await pageRes.text();
        const ogMatch = pageHtml.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/);
        if (ogMatch) {
          const ext = ogMatch[1].split(".").pop().split("?")[0] || "png";
          const filename = `${slug}.${ext}`;
          const downloaded = await downloadImage(ogMatch[1], filename);
          if (downloaded) {
            localImage = `/images/coregenix/blog/${filename}`;
            console.log(`    ✓ Image: ${filename}`);
          } else {
            console.log(`    ✗ Image download failed`);
          }
        }
      } catch (e) {
        console.log(`    ✗ Error: ${e.message}`);
      }
    } else {
      console.log(`  [${i + 1}/${wpPosts.length}] ${slug} - image exists`);
      if (existsSync(imgPathJpg)) localImage = `/images/coregenix/blog/${slug}.jpg`;
      else if (existsSync(imgPathJpeg)) localImage = `/images/coregenix/blog/${slug}.jpeg`;
    }

    posts.push({
      slug,
      tag,
      title,
      excerpt,
      image: localImage,
      date,
      author: "CoreGenix",
      content,
    });
  }

  // Step 4: Generate posts.ts
  console.log("\nStep 3: Generating posts.ts...");
  const tsContent = `export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export const posts: BlogPost[] = [
${posts
  .map(
    (p) => `  {
    slug: ${JSON.stringify(p.slug)},
    tag: ${JSON.stringify(p.tag)},
    title: ${JSON.stringify(p.title)},
    excerpt: ${JSON.stringify(p.excerpt)},
    image: ${JSON.stringify(p.image)},
    date: ${JSON.stringify(p.date)},
    author: ${JSON.stringify(p.author)},
    content: [
${p.content.map((c) => `      ${JSON.stringify(c)}`).join(",\n")}
    ],
  }`
  )
  .join(",\n")}
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
`;

  await writeFile(OUT_FILE, tsContent);
  console.log(`\n✓ Done! Wrote ${posts.length} posts to posts.ts`);
  console.log(`✓ Images in public/images/coregenix/blog/`);
}

main().catch(console.error);
