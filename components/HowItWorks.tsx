import { site } from "@/content/site";

export function HowItWorks() {
  const { title, steps } = site.how;
  return (
    <section className="band" id="how-it-works">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.label}>
              <p className="step-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
