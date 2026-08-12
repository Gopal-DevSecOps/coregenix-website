import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const team = [
  { name: "Maj. S K Goyal", role: "MD & CFO", image: "/images/coregenix/team-1.jpg" },
  { name: "Alka", role: "Director", image: "/images/coregenix/team-2.jpg" },
  { name: "Monika", role: "Director Sales", image: "/images/coregenix/team-3.jpg" },
  { name: "Yusuf", role: "Cyber Security SME & Technical Director", image: "/images/coregenix/team-4.jpg" },
  { name: "Sheltan", role: "Tech & Innovation Head", image: "/images/coregenix/team-5.jpg" },
];

export default function Leadership() {
  return (
    <section id="team" className="section leadership">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Meet Our <span className="grad">Expert Team</span>
            </>
          }
          desc="Experienced IT and security professionals who steer your business in the right direction."
        />
        <div className="team-grid">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 5) + 1}>
              <div className="team-card">
                <div className="team-img">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
