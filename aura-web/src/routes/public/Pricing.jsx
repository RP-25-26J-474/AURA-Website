import { Link } from "react-router-dom";
import { vectors } from "../../assets";
import CheckIcon from "../../assets/vectors/CheckIcon";
import { plans } from "../../constants";

export default function Pricing() {
  const clipPathPolygon = vectors.blobWideClipPath();
  
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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Pricing
        </p>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Choose the right AURA Dev plan
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-base-content/75 sm:text-xl">
        Build accessible, adaptive experiences with AURA’s React components and
        personalization platform. Start with demo profiles, then connect to your
        ML engine and dashboards.
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
              <span className="text-base text-base-content/75">
                {plan.period}
              </span>
            </p>

            <p className="mt-6 text-base text-base-content">
              {plan.description}
            </p>

            <ul
              role="list"
              className="mt-8 space-y-3 text-sm text-base-content/75 sm:mt-10"
            >
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
                <a
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                  href="mailto:sales@aura.ai"
                >
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
