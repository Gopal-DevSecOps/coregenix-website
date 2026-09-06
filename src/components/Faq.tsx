import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What services does CoreGenix provide?",
    a: "CoreGenix provides IT infrastructure and cyber security services including Network Operations Center (NOC), Annual Maintenance Contracts (AMC), cloud infrastructure management, VAPT, managed SOC services, GRC & DPDPA compliance, and OT security for businesses across India.",
  },
  {
    q: "Is CoreGenix a cyber security company?",
    a: "Yes, CoreGenix is a cyber security and IT infrastructure company headquartered in Mumbai, India, offering managed security services, vulnerability assessments, penetration testing, and 24/7 threat monitoring.",
  },
  {
    q: "Where is CoreGenix based?",
    a: "CoreGenix is headquartered in Mumbai, India, with additional operations in Bengaluru and Jaipur, serving clients across the globe.",
  },
  {
    q: "How many years of experience does CoreGenix have?",
    a: "CoreGenix has over 22 years of experience, having been founded in 2004 as CG Consultancy and Engineering Services (CGCES).",
  },
  {
    q: "Does CoreGenix offer cloud services?",
    a: "Yes, CoreGenix offers cloud infrastructure services including cloud strategy, migration, infrastructure management, and backup & recovery across public, private, and hybrid cloud environments.",
  },
  {
    q: "What is OT security and does CoreGenix provide it?",
    a: "OT (Operational Technology) security protects industrial control systems and operational networks from cyber threats. CoreGenix provides dedicated OT security services as part of its managed cyber security offerings.",
  },
  {
    q: "Is CoreGenix ISO 27001 certified?",
    a: "Yes, CoreGenix is ISO 27001 certified, confirming its information security management practices meet international standards.",
  },
  {
    q: "Which companies has CoreGenix worked with?",
    a: "CoreGenix has provided IT infrastructure, cloud, and licensing services to organizations including top Manufacturing, BFSI, Retail, Healthcare organizations and more.",
  },
];

export default function Faq() {
  return (
    <section className="section faq" aria-label="Frequently asked questions">
      <div className="container">
        <SectionHeading
          center
          title="Frequently Asked Questions"
          desc="Straight answers about who we are, what we do, and how we work."
        />
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details className="faq-item" key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="plus" />
              </summary>
              <div className="answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}