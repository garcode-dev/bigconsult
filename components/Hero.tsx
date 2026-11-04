import { site } from "@/content/site";
import { Button } from "./Button";
import { HeroArt } from "./HeroArt";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="frame hero" id="top">
      <header className="nav">
        <Logo />
        <nav aria-label="Main">
          <ul className="nav-links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={site.links.start} variant="light">{site.navCta}</Button>
      </header>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>{site.hero.headline}</h1>
          <p>{site.hero.body}</p>
          <Button href={site.links.start} variant="light" interest="cac">{site.hero.cta}</Button>
        </div>
        <div className="hero-visual">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
