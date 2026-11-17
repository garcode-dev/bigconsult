import Image from "next/image";
import { site } from "@/content/site";

export function Team() {
  const { title, people } = site.team;
  return (
    <section className="band" id="team">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="team-grid">
          {people.map((person) => (
            <article className="person" key={person.name}>
              <div className="person-photo-wrap">
                <Image
                  className="person-photo"
                  src={person.photo}
                  alt={`Portrait of ${person.name}`}
                  width={896}
                  height={1195}
                  sizes="(max-width: 720px) 100vw, 420px"
                />
              </div>
              <h3>{person.name}</h3>
              <ul className="person-roles">
                {person.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
              <div className="person-bio">
                {person.bio.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
