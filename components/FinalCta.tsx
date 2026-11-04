import { site } from "@/content/site";
import { Button } from "./Button";

export function FinalCta() {
  return (
    <section className="frame final">
      <h2>{site.finalCta.title}</h2>
      <Button href={site.links.start} variant="light">{site.finalCta.cta}</Button>
    </section>
  );
}
