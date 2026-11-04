# B.I.G Consultancy website (Next.js)

## Run it locally
You need Node.js 20 or newer.

```bash
npm install      # first time only
npm run dev      # open http://localhost:3000
```

`npm run build` makes a production build. Deploy by importing this folder into Vercel or Netlify.

## Page
A single landing page at `/`. The layout and style follow the Nuvane Webflow template; the sections follow `copy.md`:
Hero, Intro (CAC), Services (Tax, SCUML), Secure, Statement, How It Works, FAQ, Final CTA, Contact, Footer.

## Where things live
```
app/layout.tsx      Metadata and font (Schibsted Grotesk)
app/page.tsx        Lists the sections in order
app/globals.css     All styling. Brand colours and fonts are the tokens at the top (:root)
app/icon.svg        Favicon (temporary)
app/api/contact/    Contact form endpoint (emails the message via Resend)
lib/contact.ts      Contact form validation (used by the form and the API route)
components/         One component per section
content/site.ts     ALL the copy and links. Edit text here, not in the components
copy.md             The client's web copy as supplied
```

## Contact form: turn on email delivery
The form posts to `/api/contact`, which sends through Resend (https://resend.com), the same setup as the
Garcode and Re-Green sites. Copy `.env.example` to `.env.local` for local testing, and set the same variables
on Vercel/Netlify:
- `RESEND_API_KEY` (required)
- `CONTACT_TO`: inbox for messages (required until `contact.form.to` is set in `content/site.ts`)
- `CONTACT_FROM`: sender on a domain verified in Resend, e.g. `B.I.G Consultancy <website@your-domain.com>`

Each message is emailed to `CONTACT_TO` (replying goes to the visitor), and the visitor gets a short
confirmation that doesn't repeat what they typed, so the form can't be used to send someone else spam.
Until these are set, submitting shows an error. Spam protection: a hidden honeypot field and a limit of
5 messages per visitor per 10 minutes.

The "I'm getting in touch about" options are in `content/site.ts` (`contact.form.interests`). A link with
`data-interest="cac"` opens the form with that option selected.

## Still to do before launch
Search the code for `TODO`:
- **Contact form:** add the Resend environment variables above, and the client's public email as `contact.form.to`.
- **Form wording:** the Contact heading, intro, dropdown options and messages weren't in the client's copy. Confirm them.
- **Learn more:** both buttons go to the FAQ, because the copy has no separate service pages.
- **Contact details:** the footer shows `[Add phone, email and address]`.
- **Logo:** text wordmark in `components/Logo.tsx`; the favicon is temporary too.
- **Hero image:** an illustration in `components/HeroArt.tsx`. A client photo should be 1200×1400.
- **Share image and domain:** add `public/og.png` (1200×630) and `metadataBase` in `app/layout.tsx`.
- **Brand colours:** proposed, not supplied. Confirm with the client.
