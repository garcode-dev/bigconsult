import { site } from "@/content/site";

export function Statement() {
  return (
    <section className="section container">
      <p className="statement">{site.statement}</p>
    </section>
  );
}
