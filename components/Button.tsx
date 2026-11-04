type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "text";
  /** Pre-selects this option in the contact form when clicked. See contact.form.interests. */
  interest?: string;
};

export function Button({ href, children, variant = "dark", interest }: Props) {
  return (
    <a className={`btn btn-${variant}`} href={href} data-interest={interest}>
      {children}
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path d="m6 3.5 4.5 4.5L6 12.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
