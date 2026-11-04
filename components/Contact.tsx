import ContactForm from "./ContactForm";
import { contact } from "@/content/site";

export function Contact() {
  return (
    <section className="band contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">{contact.title}</h2>
          <p className="contact-lead">{contact.lead}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
