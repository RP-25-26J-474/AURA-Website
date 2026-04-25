import { FaBook, FaMagnifyingGlass, FaCircleExclamation, FaBullseye, FaGear, FaCode } from "react-icons/fa6";

const Section = ({ icon, title, children, id }) => (
  <section id={id} className="mb-16 scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-base-content">{title}</h2>
    </div>
    <div className="prose prose-base max-w-none text-base-content/70 leading-relaxed">
      {children}
    </div>
  </section>
);

export default function Domain() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-base-content mb-4 tracking-tight">Project Domain</h1>
        <p className="text-lg text-base-content/50 max-w-2xl">
          Understanding the landscape of adaptive web interfaces and our approach to inclusive design.
        </p>
      </header>

      <Section icon={<FaBook />} title="Literature Survey" id="literature-survey">
        <p>
          Modern web applications are used for education, healthcare, banking, communication, e-commerce, and public services. However, many websites still follow a fixed interface design that assumes all users interact with digital systems in the same way. This creates difficulties for users with visual limitations, motor impairments, color vision deficiencies, and lower levels of digital literacy.
        </p>
        <p className="mt-4">
          Existing accessibility solutions such as font resizing, high-contrast modes, screen readers, and keyboard navigation provide important support for inclusive design. However, many of these solutions depend on manual configuration and do not automatically adapt to the changing needs of individual users.
        </p>
        <div className="mt-6 p-6 rounded-2xl bg-base-200 border border-base-300">
          <h4 className="text-base-content font-bold mb-2">Key Research Insights</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Interaction patterns provide signals about user difficulties.</li>
            <li>Gamified tasks can effectively assess visual perception and motor coordination.</li>
            <li>Machine learning enables systems to infer user needs and recommend interface changes.</li>
          </ul>
        </div>
      </Section>

      <Section icon={<FaMagnifyingGlass />} title="Research Gap" id="research-gap">
        <p>
          A major gap exists in combining both <strong>active user assessment</strong> and <strong>passive interaction monitoring</strong> within a single personalization system. Active assessment can identify user needs through onboarding tasks, while passive monitoring can continuously observe real interaction behavior.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
            <h4 className="text-primary font-bold mb-2">Technical Gap</h4>
            <p className="text-sm">Lack of lightweight, developer-friendly solutions for modern web applications that don't require heavy backend infrastructure.</p>
          </div>
          <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10">
            <h4 className="text-secondary font-bold mb-2">Functional Gap</h4>
            <p className="text-sm">Personalization systems often focus on engagement rather than accessibility-related needs like visual or motor impairments.</p>
          </div>
        </div>
      </Section>

      <Section icon={<FaCircleExclamation />} title="Research Problem" id="research-problem">
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
          <p className="text-xl font-medium text-base-content italic leading-relaxed">
            "How can a web interface dynamically and continuously adapt in real time using user interaction data to support adults with diverse visual, motor, and literacy abilities?"
          </p>
        </div>
        <p className="mt-6">
          Solving this problem requires a system that can identify user needs through both direct assessment and continuous behavior monitoring, applying suitable interface changes such as improved typography, spacing, and interaction support.
        </p>
      </Section>

      <Section icon={<FaBullseye />} title="Research Objectives" id="research-objectives">
        <div className="space-y-4">
          {[
            "Capture and analyze user interaction data in the browser.",
            "Design gamified onboarding for multi-dimensional ability assessment.",
            "Implement ML models to infer accessibility needs from behavior.",
            "Apply real-time UI adaptations (typography, layout, contrast).",
            "Design a reusable frontend component architecture.",
            "Evaluate effectiveness through usability and accessibility measures."
          ].map((obj, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-base-200 transition-colors">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-base-content/80 font-medium">{obj}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<FaGear />} title="Methodology" id="methodology">
        <p className="mb-8">AURA follows a modular system engineering approach consisting of four main components:</p>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-6 items-start">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-base-300 items-center justify-center font-bold">1</div>
            <div>
              <h4 className="text-lg font-bold text-base-content mb-2">Browser Extension & Categorization</h4>
              <p className="text-sm">Captures consent, conducts onboarding assessments, and monitors interaction signals like clicks, dwell time, and scrolling.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-base-300 items-center justify-center font-bold">2</div>
            <div>
              <h4 className="text-lg font-bold text-base-content mb-2">ML Personalization Engine</h4>
              <p className="text-sm">Processes interaction data using KNN and GRU-based models to generate adaptive UI profiles.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-base-300 items-center justify-center font-bold">3</div>
            <div>
              <h4 className="text-lg font-bold text-base-content mb-2">NPM-Based Adaptation Layer</h4>
              <p className="text-sm">A reusable React package that distributes adaptive settings via an AdaptiveProvider.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-base-300 items-center justify-center font-bold">4</div>
            <div>
              <h4 className="text-lg font-bold text-base-content mb-2">Adaptive Optimization Engine</h4>
              <p className="text-sm">Continuously improves personalization using reinforcement learning based on user feedback.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section icon={<FaCode />} title="Technologies Used" id="technologies">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3">Frontend</h4>
            <ul className="text-sm space-y-1 text-base-content/60">
              <li>React.js / TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
              <li>React Context API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-secondary mb-3">Machine Learning</h4>
            <ul className="text-sm space-y-1 text-base-content/60">
              <li>FastAPI / Python</li>
              <li>PyTorch / scikit-learn</li>
              <li>XGBoost / isolation-forest</li>
              <li>Reinforcement Learning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-3">Extension</h4>
            <ul className="text-sm space-y-1 text-base-content/60">
              <li>Manifest V3</li>
              <li>Content Scripts</li>
              <li>Chrome Storage API</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="mt-20 pt-8 border-t border-base-300">
        <div className="p-6 rounded-2xl bg-base-200 text-sm text-base-content/50 italic">
          This section provides a summarized overview of the AURA research project for academic evaluation purposes. The content has been rewritten from project documentation and does not reproduce the submitted research manuscript in full.
        </div>
      </footer>
    </div>
  );
}
