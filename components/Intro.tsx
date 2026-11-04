import { site } from "@/content/site";
import { Button } from "./Button";

export function Intro() {
  const { label, lead, handles, finger } = site.intro;
  return (
    <section className="section container intro">
      <p className="dot-label">{label}</p>
      <div>
        <p className="intro-lead">{lead}</p>
        <div className="intro-cells">
          <div>
            <h2>{handles.title}</h2>
            <p>{handles.body}</p>
          </div>
          <div>
            <h2>{finger.title}</h2>
            <Button href={site.links.start} interest="cac">{finger.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
