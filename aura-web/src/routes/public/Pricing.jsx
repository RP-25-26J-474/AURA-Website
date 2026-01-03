import { Link } from "react-router-dom";
import { vectors } from "../../assets";

function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`h-6 w-5 flex-none ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      />
    </svg>
  );
}

export default function Pricing() {
  const clipPathPolygon = vectors.blobWideClipPath();
  const plans = [
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
      cardClass: "relative rounded-3xl bg-base-100 p-8 ring-1 ring-base-content/20 sm:p-10",
      ctaClass:
        "mt-8 block rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10",
      highlight: true,
    },
  ];

  return (
    <div className="relative isolate bg-base-100 px-6 py-12 sm:py-20 lg:px-8 -z-10">
      {/* Background gradient blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{ clipPath: clipPathPolygon }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-lg font-semibold text-primary">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Choose the right AURA Dev plan
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-base-content/75 sm:text-xl">
        Build accessible, adaptive experiences with AURA’s React components and personalization platform.
        Start with demo profiles, then connect to your ML engine and dashboards.
      </p>

      {/* Plans grid */}
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-12 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.id} className={plan.cardClass}>
            <h3 id={plan.id} className="text-base font-semibold text-secondary">
              {plan.name}
            </h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-base-content">
                {plan.price}
              </span>
              <span className="text-base text-base-content/75">{plan.period}</span>
            </p>

            <p className="mt-6 text-base text-base-content">{plan.description}</p>

            <ul role="list" className="mt-8 space-y-3 text-sm text-base-content/75 sm:mt-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="text-secondary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to={plan.cta.to}
              aria-describedby={plan.id}
              className={plan.ctaClass}
            >
              {plan.cta.label}
            </Link>

            {plan.highlight && (
              <p className="mt-4 text-xs text-gray-400">
                Want a university/research plan?{" "}
                <a className="font-semibold text-indigo-400 hover:text-indigo-300" href="mailto:sales@aura.ai">
                  Email us
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
