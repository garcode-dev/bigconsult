import { site } from "@/content/site";

export function Faq() {
  const { title, items } = site.faq;
  return (
    <section className="section container faq" id="faq">
      <h2 className="section-title">{title}</h2>
      <div>
        {items.map((item) => (
          <details key={item.q}>
            <summary>
              <span>{item.q}</span>
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-answer">
              {item.a.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
