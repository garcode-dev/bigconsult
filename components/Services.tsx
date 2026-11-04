import { site } from "@/content/site";
import { Button } from "./Button";

export function Services() {
  return (
    <section className="band" id="services">
      <div className="container service-rows">
        {site.services.map((service) => (
          <article className="service" key={service.title}>
            <div className="service-head">
              <h2>{service.title}</h2>
              {service.aside && <p className="service-aside">{service.aside}</p>}
            </div>
            <div className="service-card">
              {service.listIntro && <p className="service-intro">{service.listIntro}</p>}
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                      <path d="m4.5 10.5 3.6 3.6 7.4-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href={site.links.learnMore}>{service.cta}</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
