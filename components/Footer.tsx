import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="container footer">
      <Logo />
      <ul>
        {site.nav.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <p className="footer-contact">{site.footer.contact}</p>
      <p className="footer-legal">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
