// ALL the copy and links. Edit text here, not in the components.

export const site = {
  name: "B.I.G Consultancy",
  title: "B.I.G Consultancy | CAC Registration, Tax Filing & SCUML Compliance",
  description:
    "Your business identity needs legal recognition. Register your Business/Company under CAC, file your taxes and protect your business with SCUML compliance.",

  links: {
    // Every "get started" button on the page opens the contact form.
    start: "#contact",
    // TODO: point these at service pages if the client adds them.
    learnMore: "#faq",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: "Get started",

  hero: {
    headline: "Register your Business/Company Under CAC without stress.",
    body: "Your business identity needs legal recognition. Join hundreds of B.I.G Consultancy customers to secure your company name.",
    cta: "Register your business",
  },

  intro: {
    label: "B.I.G Consultancy",
    lead: "Whether it’s a business or company name, start your official registration today and confirm the availability of your preferred name without hassle.",
    handles: {
      title: "We Handle LLCs, Corporations, and Partnerships",
      body: "With Complete EIN/Tax ID acquisition and operating agreements included.",
    },
    finger: {
      title: "You Don’t Have to Lift A Finger",
      cta: "Get started here",
    },
  },

  services: [
    {
      title: "Already Have Your Business Registered But Got Issues With Your Tax Filing?",
      aside: "No Worries",
      listIntro: "We can help you:",
      items: [
        "Minimise your liabilities and maximise your deductions.",
        "Track and provide accurate corporate, partnership, and individual tax returns.",
        "Do Year-round strategic tax planning and audit support.",
      ],
      cta: "Learn more",
    },
    {
      title: "We Provide SCUML Compliance Services:",
      items: [
        "Safeguard your business against regulatory risks.",
        "Comprehensive Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) frameworks.",
        "Know Your Customer (KYC) implementation, risk assessments, and transaction monitoring.",
      ],
      cta: "Learn more",
    },
  ],

  secure: {
    title: "Your Business Entity Is More Secure with B.I.G Consultancy",
    cta: "Get started today!",
    points: [
      "Give your customers room to trust you with ease with our CAC services.",
      "Minimise your liabilities by filing your taxes.",
      "Protect your business with our SCUML Compliance Services",
    ],
  },

  statement:
    "Thousands of businesses in Nigeria have lost the brand names they have built their identity on. You don’t have to be one of them.",

  how: {
    title: "How it works",
    steps: [
      {
        label: "Step 1",
        title: "Select Your Package",
        body: "Choose the specific registration, tax, or compliance service your company requires, or consult our team to build a tailored package.",
      },
      {
        label: "Step 2",
        title: "Submit Your Details",
        body: "Upload your baseline business objectives, director details, and identification through our secure, encrypted client portal.",
      },
      {
        label: "Step 3",
        title: "We Handle the Rest",
        body: "Our certified professionals manage the filings, clear bottlenecks with regulatory bodies, and deliver your ready-to-use e-certificates directly to your inbox.",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is CAC registration?",
        a: ["CAC registration is simply the process of getting your business, company or organization registered with CAC (the body responsible for regulating and incorporating businesses in Nigeria)"],
      },
      {
        q: "Why do I need to do CAC?",
        a: ["Basically, registering your business with CAC means your business becomes a legal entity that will be recognized by the Nigerian government, and this would give your customers more reasons to trust that you are not a scam."],
      },
      {
        q: "What documents do I need to register my business?",
        a: ["Generally, you will need government-issued IDs for all directors/proprietors, proof of address, signature samples, and your proposed business names."],
      },
      {
        q: "How long does the incorporation process take?",
        a: ["Name availability checks usually take 24–48 hours, while full business name or limited liability company registration is typically completed within 7 to 14 business days."],
      },
      {
        q: "As a foreigner, can I fully own a business in Nigeria?",
        a: ["Yes, foreigners can fully incorporate and own a limited liability company, though certain sectors require specific regulatory permits or minimum share capital thresholds."],
      },
      {
        q: "How do I know if my business requires SCUML?",
        a: [
          "SCUML stands for Special Control Unit Against Money Laundering. It is legally required for Designated Non-Financial Businesses and Professions (DNFBPs) such as real estate, hotels, law firms, jewellers, and consultants to monitor and prevent money laundering.",
          "So if your business falls under any of these, you’ll need a SCUML certificate",
        ],
      },
      {
        q: "What are the requirements for a successful SCUML application?",
        a: ["You will need your incorporation documents (CAC status report/documents), Tax Identification Number (TIN), valid director IDs, and a professional layout or profile of your business operations."],
      },
      {
        q: "How soon after registration should I get my Tax Identification Number (TIN)?",
        a: ["Your TIN is generated automatically upon incorporation with the Corporate Affairs Commission, but it must be activated with the tax authorities before you can file returns."],
      },
      {
        q: "Can you handle the entire process remotely, or do I need to visit a physical office?",
        a: ["Our onboarding, document submission, and portal tracking are 100% digital. You can complete your entire setup securely from your phone or computer."],
      },
    ],
  },

  finalCta: {
    title: "Join hundreds of people who trust B.I.G Consultancy for a fast and reliable Business Setup, Tax & SCUML Compliance",
    cta: "Start now",
  },

  footer: {
    // TODO: replace with the client's real phone, email and address.
    contact: "[Add phone, email and address]",
  },
};

/* Contact section and form (#contact). This wording wasn't in the client's copy: confirm it. */
export const contact = {
  title: "Contact us",
  lead: "Tell us what your business needs and our team will get back to you.",
  form: {
    button: "Send message",
    confirmation: "Thank you. We’ve received your message and will get back to you soon.",
    error: "Your message wasn’t sent. Please try again in a few minutes.",
    // `value` is what links use to pre-select an option, e.g. <a href="#contact" data-interest="tax">
    interests: [
      { value: "cac", label: "CAC registration" },
      { value: "tax", label: "Tax filing" },
      { value: "scuml", label: "SCUML compliance" },
      { value: "other", label: "Something else" },
    ],
    // TODO: add the client's public email. It's shown when sending fails, and is the default
    // inbox. CONTACT_TO in the environment overrides it as the inbox.
    to: "",
  },
};
