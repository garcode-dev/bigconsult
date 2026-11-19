import { site } from "@/content/site";
import { Button } from "./Button";

export function Strategy() {
  const s = site.strategy;
  return (
    <section className="section container" id="strategy">
      <div className="strategy-head">
        <p className="dot-label">{s.label}</p>
        <div>
          <h2 className="section-title">{s.title}</h2>
          <p className="strategy-lead">{s.lead}</p>
        </div>
      </div>

      <div className="strategy-body">
        <div className="split">
          <div className="split-what">
            <h3>{s.what.title}</h3>
            <p>{s.what.body}</p>
          </div>
          <div className="split-how">
            <h3>{s.how.title}</h3>
            <p>{s.how.body}</p>
            <a href={s.how.link.href}>{s.how.link.label}</a>
          </div>
        </div>

        <div>
          <h3 className="sub-title">{s.disciplinesTitle}</h3>
          <ul className="disciplines">
            {s.disciplines.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="sub-title">{s.horizonTitle}</h3>
          <ol className="horizon">
            {s.horizon.map((h) => (
              <li key={h.value}>
                <span className="horizon-value">{h.value}</span>
                <span className="horizon-label">{h.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <Button href={site.links.start} interest="strategy">{s.cta}</Button>
      </div>
    </section>
  );
}
