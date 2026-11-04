import { site } from "@/content/site";
import { Button } from "./Button";

export function Secure() {
  const { title, cta, points } = site.secure;
  return (
    <section className="frame secure">
      <div className="secure-head">
        <h2>{title}</h2>
        <Button href={site.links.start} variant="light">{cta}</Button>
      </div>
      <ul className="secure-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
