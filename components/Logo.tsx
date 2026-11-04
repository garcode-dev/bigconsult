import { site } from "@/content/site";

// TODO: swap for the client's logo file in public/images/ when supplied.
export function Logo() {
  return (
    <a className="logo" href="#top" aria-label={`${site.name} home`}>
      <span className="logo-big">B.I.G</span> Consultancy
    </a>
  );
}
