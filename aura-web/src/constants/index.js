export const featureCards = [
  {
    title: "Adaptive by design",
    description:
      "AURA learns from behavior and context to refine components in real time without sacrificing performance.",
  },
  {
    title: "Accessible defaults",
    description:
      "Built-in guardrails keep layouts readable, navigable, and inclusive across devices and abilities.",
  },
  {
    title: "Composable system",
    description:
      "Drop in React primitives or scale to full journeys with flexible tokens and reusable patterns.",
  },
  {
    title: "Insightful analytics",
    description:
      "Measure intent, engagement, and friction points with clear dashboards that drive iteration.",
  },
];

export const quickStats = [
  { value: "10+", label: "Adaptive components" },
  { value: "24/7", label: "Behavioral monitoring" },
  { value: "5x", label: "Faster experiment cycles" },
];

export const plans = [
  {
    id: "tier-starter",
    name: "Starter",
    price: "$29",
    period: "/month",
    description:
      "For individual developers and small demos integrating AURA adaptive components.",
    features: [
      "NPM package access (core adaptive components)",
      "Sandbox API key (demo personalization profiles)",
      "Basic analytics dashboard (sample data)",
      "Community support",
    ],
    cta: { label: "Get started", to: "/register" },
    cardClass:
      "rounded-3xl bg-base-content/10 p-8 ring-1 ring-base-200/50 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl",
    ctaClass:
      "mt-8 block rounded-md bg-base-100 px-3.5 py-2.5 text-center text-sm font-semibold text-base-content inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 sm:mt-10",
    highlight: false,
  },
  {
    id: "tier-enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description:
      "For organizations deploying AURA with ML personalization, dashboards, and governance.",
    features: [
      "Everything in Starter",
      "Organization dashboard & multi-site management",
      "Role-based access (client + developer)",
      "Webhook integrations (events + logs)",
      "Priority support & onboarding",
      "Custom integrations (backend + data pipelines)",
    ],
    cta: { label: "Contact sales", to: "/register" },
    cardClass:
      "relative rounded-3xl bg-base-100 p-8 ring-1 ring-base-content/20 sm:p-10",
    ctaClass:
      "mt-8 block rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10",
    highlight: true,
  },
];
