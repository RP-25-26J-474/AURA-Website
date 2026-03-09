import { Link } from "react-router-dom";

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 flex-none text-primary" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      />
    </svg>
  );
}

const stats = [
  { label: "Competitive advantage", value: "~90%", note: "No direct end-to-end competitors" },
  { label: "Deployment model", value: "Client-side", note: "Most processing via browser extension" },
  { label: "Integration effort", value: "< 5 min", note: "Standard React + NPM ecosystem" },
];

const plans = [
  {
    id: "free",
    badge: null,
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "For individual developers exploring adaptive UI or contributing to the ecosystem.",
    features: [
      "Full NPM package — all 19 adaptive components",
      "Browser extension (free download)",
      "Client-side ML personalization",
      "Community support via GitHub",
      "MIT License — use in any project",
    ],
    cta: { label: "Get the package", href: "https://www.npmjs.com/package/@aura-adaptive/aura-ui-adaptor" },
    highlighted: false,
  },
  {
    id: "pro",
    badge: "Most popular",
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For product teams and growing platforms that need personalization analytics and priority access.",
    features: [
      "Everything in Open Source",
      "Sandbox API key with real personalization profiles",
      "Analytics dashboard — per-component adaptation data",
      "Multi-site profile management",
      "Webhook integrations (events + logs)",
      "Priority support & onboarding",
    ],
    cta: { label: "Start free trial", to: "/register" },
    highlighted: true,
  },
  {
    id: "enterprise",
    badge: null,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations serving diverse or aging user populations that require governance, SLAs, and custom ML pipelines.",
    features: [
      "Everything in Pro",
      "Role-based access (client + developer portals)",
      "Custom ML personalization pipelines",
      "Dedicated infrastructure & data isolation",
      "WCAG compliance reporting",
      "Dedicated success manager",
    ],
    cta: { label: "Contact us", to: "/contact-us" },
    highlighted: false,
  },
];

const audiences = [
  {
    icon: "🖥️",
    title: "Web Developers & Product Teams",
    desc: "Drop in adaptive components in minutes. Zero config — components read personalization profiles automatically.",
  },
  {
    icon: "♿",
    title: "Accessibility-Focused Organizations",
    desc: "Automatic WCAG-aligned adaptations without manual configuration for every edge case.",
  },
  {
    icon: "🏥",
    title: "Platforms Serving Diverse Populations",
    desc: "Healthcare, education, government — serving aging or differently-abled users with UI that adapts to them.",
  },
];

export default function Pricing() {
  return (
    <div className="bg-base-100">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden py-24 px-6 lg:px-8 text-center">
        {/* Background blob */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden px-36 blur-3xl pointer-events-none">
          <div
            className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-primary to-secondary opacity-10"
            style={{ clipPath: "polygon(8.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          />
        </div>

        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">Pricing</span>
        <h1 className="text-5xl font-bold text-base-content sm:text-6xl">
          Build for everyone.<br className="hidden sm:block" />
          <span className="text-primary">Scale with AURA.</span>
        </h1>
        <p className="mt-6 text-lg text-base-content/60 max-w-2xl mx-auto">
          The only end-to-end behavior-driven UI personalization library. Free to start, built to scale — from solo developers to enterprise platforms.
        </p>
      </section>

      {/* ── Market stats ────────────────────────────────── */}
      <section className="border-y border-base-300 bg-base-200">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-base-content">{s.label}</p>
              <p className="text-xs text-base-content/40 mt-0.5">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Plans ─────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${plan.highlighted
                  ? "border-primary/40 bg-primary/5 ring-2 ring-primary/20 shadow-lg"
                  : "border-base-300 bg-base-200"
                }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block bg-primary text-primary-content text-xs font-bold tracking-wide px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              )}

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">{plan.name}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-base-content">{plan.price}</span>
                  {plan.period && <span className="text-base-content/40 text-sm">{plan.period}</span>}
                </div>
                <p className="mt-3 text-sm text-base-content/55 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-base-content/70">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.cta.href ? (
                <a
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full ${plan.highlighted ? "btn-primary" : "btn-outline"}`}
                >
                  {plan.cta.label}
                </a>
              ) : (
                <Link
                  to={plan.cta.to}
                  className={`btn w-full ${plan.highlighted ? "btn-primary" : "btn-outline"}`}
                >
                  {plan.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Who it's for ──────────────────────────────────── */}
      <section className="bg-base-200 border-t border-base-300 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Who it's for</span>
            <h2 className="mt-2 text-3xl font-bold text-base-content">Built for teams who care about every user</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-xl border border-base-300 bg-base-100 p-6">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-base-content mb-1.5">{a.title}</h3>
                <p className="text-sm text-base-content/55 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value proposition ─────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why AURA</span>
            <h2 className="mt-2 text-3xl font-bold text-base-content">A market gap — captured early</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Automatic personalization",
                desc: "UI adapts based on real user behavior and abilities — no manual configuration or accessibility overrides needed.",
                icon: "🤖",
              },
              {
                title: "No direct competitors",
                desc: "No publicly available end-to-end behavior-driven UI personalization library exists today — giving you a first-mover advantage.",
                icon: "🏁",
              },
              {
                title: "Low deployment cost",
                desc: "Most personalization runs client-side via browser extension and npm package — minimal cloud infrastructure required.",
                icon: "💰",
              },
              {
                title: "Standard stack",
                desc: "Built on React and the NPM ecosystem. Integrates in under 5 minutes with any modern web project.",
                icon: "⚡",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-base-300 bg-base-200 p-5">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Adoption roadmap ──────────────────────────────── */}
      <section className="bg-base-200 border-t border-base-300 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Rollout</span>
          <h2 className="mt-2 text-3xl font-bold text-base-content mb-10">How we're growing</h2>
          <ol className="relative border-l-2 border-primary/30 text-left space-y-8 pl-8">
            {[
              { step: "01", title: "Pilot integrations", desc: "Selected web platforms and developer communities get early access." },
              { step: "02", title: "Public NPM + Extension launch", desc: "Full public rollout — free for all developers worldwide." },
              { step: "03", title: "Data-driven improvement", desc: "Continuous optimization through real user feedback and behavioral data." },
            ].map((item) => (
              <li key={item.step} className="relative">
                <span className="absolute -left-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-content text-xs font-bold">
                  {item.step}
                </span>
                <h3 className="font-semibold text-base-content">{item.title}</h3>
                <p className="mt-1 text-sm text-base-content/55">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-base-content">Ready to build adaptive UIs?</h2>
        <p className="mt-3 text-base-content/55 max-w-xl mx-auto">
          Start free with the open-source package. No credit card required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.npmjs.com/package/@aura-adaptive/aura-ui-adaptor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-8"
          >
            Get the package
          </a>
          <Link to="/docs/getting-started" className="btn btn-outline btn-lg px-8">
            Read the docs
          </Link>
        </div>
      </section>

    </div>
  );
}
