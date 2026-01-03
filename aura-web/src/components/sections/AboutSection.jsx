import React from "react";

function AboutSection() {
  const clipPathPolygon =
    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

  const featureCards = [
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

  const quickStats = [
    { value: "10+", label: "Adaptive components" },
    { value: "24/7", label: "Behavioral monitoring" },
    { value: "5x", label: "Faster experiment cycles" },
  ];

  return (
    <section className="relative isolate bg-base-200">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-64"
      >
        <div
          style={{ clipPath: clipPathPolygon }}
          className="relative left-[calc(50%-6rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-12 bg-linear-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-24rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-5xl xl:max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              About AURA
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-base-content sm:text-5xl">
              Adaptive experiences that evolve with every interaction.
            </h2>
            <p className="mt-6 text-lg text-pretty text-base-content/75">
              AURA blends component intelligence with personalization signals
              so each interface feels purposeful, accessible, and human. Teams
              ship faster with reusable patterns that learn as your product
              grows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge badge-primary badge-outline">Personalization</span>
              <span className="badge badge-primary badge-outline">Context-aware UI</span>
              <span className="badge badge-primary badge-outline">Accessibility</span>
              <span className="badge badge-primary badge-outline">Experimentation</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-base-300 bg-base-200/60 p-5 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-base-content">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-base-content/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/70 bg-base-200/50 px-5 py-6 text-center"
            >
              <div className="text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-base-content/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
