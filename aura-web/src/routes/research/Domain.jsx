import { FaBook, FaMagnifyingGlass, FaCircleExclamation, FaBullseye, FaGear, FaCode } from "react-icons/fa6";
import { RESEARCH_TECHNOLOGIES, RESEARCH_OBJECTIVES } from "../../constants/research";
import systemArch from "../../assets/images/system/system-architecture.png";

const Section = ({ icon, title, children, id }) => (
  <section id={id} className="mb-16 scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-base-content">{title}</h2>
    </div>
    <div className="prose prose-base max-w-none text-base-content/70 leading-relaxed text-justify">
      {children}
    </div>
  </section>
);

export default function Domain() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4 tracking-tight">Project Domain</h1>
        <p className="text-lg text-base-content/50">
          Detailed overview of the AURA research project, including literature survey, gaps, objectives, and methodology.
        </p>
      </header>

      <Section icon={<FaBook />} title="Literature Survey" id="literature-survey">
        <p>
          Modern web applications are used for education, healthcare, banking, communication, e-commerce, and public services. However, many websites still follow a fixed interface design that assumes all users interact with digital systems in the same way. This creates difficulties for users with visual limitations, motor impairments, color vision deficiencies, and lower levels of digital literacy.
        </p>
        <p className="mt-4">
          Existing accessibility solutions such as font resizing, high-contrast modes, screen readers, and keyboard navigation provide important support for inclusive design. Standards such as the Web Content Accessibility Guidelines also help developers create more accessible systems. However, many of these solutions depend on manual configuration and do not automatically adapt to the changing needs of individual users.
        </p>
        <p className="mt-4">
          Recent research in Human–Computer Interaction and Artificial Intelligence has explored adaptive interfaces that respond to user behavior. Studies show that interaction patterns such as mouse movement, click accuracy, scrolling behavior, reaction time, and navigation patterns can provide useful signals about user difficulties. Gamified onboarding tasks have also been used to assess visual perception, motor coordination, and digital literacy in a structured way.
        </p>
        <p className="mt-4">
          Machine learning techniques have further improved adaptive personalization by enabling systems to infer user needs and recommend suitable interface changes. Reinforcement learning and clustering methods have also been applied to optimize interface behavior over time. However, many existing systems focus mainly on engagement or performance rather than accessibility. In addition, most solutions do not combine user profiling, real-time behavioral tracking, adaptive UI rendering, and developer-friendly implementation into one complete system.
        </p>
        <p className="mt-4">
          Therefore, the literature shows a strong need for an intelligent and scalable adaptive web interface framework that can support users with diverse visual, motor, and literacy needs in real time.
        </p>
      </Section>

      <Section icon={<FaMagnifyingGlass />} title="Research Gap" id="research-gap">
        <p>
          Although several adaptive interface systems have been proposed, many existing solutions still depend on static settings or manual accessibility controls. These approaches do not fully support users whose needs differ based on ability, device, context, or interaction behavior.
        </p>
        <p className="mt-4">
          A major gap exists in combining both <strong>active user assessment</strong> and <strong>passive interaction monitoring</strong> within a single personalization system. Active assessment can identify user needs through onboarding tasks, while passive monitoring can continuously observe real interaction behavior. However, these two approaches are often studied separately.
        </p>
        <p className="mt-4">
          Another limitation is that many personalization systems are designed for marketing, engagement, or general user preference optimization. They do not specifically focus on accessibility-related needs such as visual impairment, motor difficulty, inaccurate clicking, delayed reactions, or low digital literacy.
        </p>
        <p className="mt-4">
          There is also a technical gap in providing a lightweight and developer-friendly solution for modern web applications. Many existing adaptive systems require complex backend infrastructure, special devices, or heavy integration effort. As a result, developers lack reusable frontend tools that can easily apply adaptive UI changes in real time.
        </p>
        <p className="mt-4">
          Therefore, the main research gap is the absence of a unified system that combines behavioral tracking, gamified ability assessment, impairment-aware machine learning, real-time UI adaptation, and reusable frontend components for inclusive web personalization.
        </p>
      </Section>

      <Section icon={<FaCircleExclamation />} title="Research Problem" id="research-problem">
        <p>
          Most web applications use static user interfaces that do not adapt to the different needs of users with visual, motor, and digital literacy challenges. As a result, users may experience difficulties such as poor readability, inaccurate clicking, complex navigation, low confidence, and reduced task completion efficiency.
        </p>
        <p className="mt-4 font-semibold text-base-content">The main research problem addressed by AURA is:</p>
        <div className="relative p-8 my-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
          <p className="text-lg font-medium text-base-content italic leading-relaxed">
            "How can a web interface dynamically and continuously adapt in real time using user interaction data to support adults with diverse visual, motor, and literacy abilities?"
          </p>
        </div>
        <p>
          Solving this problem requires a system that can identify user needs through both direct assessment and continuous behavior monitoring, and then apply suitable interface changes such as improved typography, spacing, contrast, target size, layout simplicity, and interaction support.
        </p>
      </Section>

      <Section icon={<FaBullseye />} title="Research Objectives" id="research-objectives">
        <h4 className="text-lg font-bold text-base-content mb-4">Main Objective</h4>
        <p className="mb-8">
          To design and develop an adaptive web UI personalization system that dynamically adjusts interface elements in real time based on user interaction patterns, with the goal of improving accessibility and usability for adults with diverse visual, motor, and literacy abilities.
        </p>

        <h4 className="text-lg font-bold text-base-content mb-4">Specific Objectives</h4>
        <div className="space-y-4">
          {RESEARCH_OBJECTIVES.map((obj, i) => (
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
        <p className="mb-8">
          AURA follows a modular system engineering approach to provide real-time adaptive web interface personalization. The system is designed as an end-to-end framework that collects user interaction data, identifies user needs, generates personalization profiles, applies UI adaptations, and continuously improves the interface through feedback.
        </p>

        <div className="mb-12 p-4 overflow-hidden group">
          <img 
            src={systemArch} 
            alt="AURA System Architecture" 
            className="w-full h-auto rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="mt-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-base-content/30">AURA High-Level System Architecture</span>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-base-300 flex items-center justify-center text-sm">1</span>
              Browser Extension and User Categorization
            </h4>
            <p>
              The browser extension acts as the first point of interaction between the user and the AURA system. It is responsible for collecting user consent, conducting onboarding assessments, monitoring interaction behavior, and generating an initial user profile.
            </p>
            <p className="mt-4">During onboarding, users complete a set of interactive tasks designed to assess:</p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>Color vision ability</li>
              <li>Visual acuity</li>
              <li>Motor coordination</li>
              <li>Digital literacy</li>
            </ul>
            <p className="mt-4">
              The color vision task uses Ishihara-style plates to identify possible color perception difficulties. The visual acuity task evaluates how well users recognize visual elements at different sizes. The motor assessment uses a bubble-popping activity to measure click accuracy, reaction time, movement smoothness, and target selection ability. Digital literacy is assessed using a short questionnaire based on common web interaction tasks such as icon recognition, navigation, and basic online safety awareness.
            </p>
            <p className="mt-4">
              In addition to onboarding, the extension continuously tracks interaction signals during normal web usage. These include clicks, misclicks, dwell time, rage clicks, zoom actions, scrolling behavior, and cursor movement patterns. The collected data is grouped into short time windows and sent securely for processing. Sensitive page information is sanitized to protect user privacy.
            </p>
            <p className="mt-4 italic text-sm">This component produces two main outputs: an initial impairment-aware user profile and a continuous stream of behavioral interaction data.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-base-300 flex items-center justify-center text-sm">2</span>
              Machine Learning Personalization Engine
            </h4>
            <p>
              The machine learning personalization engine processes the user profiles and interaction data collected by the browser extension. Its purpose is to generate adaptive UI profiles that describe how the interface should change for each user.
            </p>
            <p className="mt-4">
              The system first validates incoming data to reduce the effect of noisy or temporary user behavior. Anomaly detection techniques are used to identify unusual interaction patterns that should not influence long-term personalization.
            </p>
            <p className="mt-4">
              For new users, AURA uses a cold-start personalization approach. Users are represented using impairment-related features such as vision loss, color blindness, delayed reaction, inaccurate clicks, motor impairment, and literacy level. Similar users are identified using a K-Nearest Neighbours approach, and suitable interface settings are recommended based on previously validated profiles.
            </p>
            <p className="mt-4">
              For returning users, the system applies continuous personalization. Interaction sequences are analyzed using machine learning models to identify behavioral patterns over time. These patterns help the system refine UI settings as the user continues to interact with websites.
            </p>
            <p className="mt-4 italic text-sm">The output of this component is a personalization profile containing adaptation parameters such as font size, line height, spacing, contrast mode, target size, motion preference, and layout simplification level.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-base-300 flex items-center justify-center text-sm">3</span>
              NPM-Based Frontend Adaptation Layer
            </h4>
            <p>
              The frontend adaptation layer applies the personalization decisions to real web interfaces. This is implemented as a reusable npm package designed for React-based applications.
            </p>
            <p className="mt-4">
              The package includes an `AdaptiveProvider` that receives the personalization profile and distributes the adaptive settings across the application. It converts the profile into design tokens that control typography, spacing, colors, contrast, target sizes, and motion behavior.
            </p>
            <p className="mt-4">
              Developers can integrate the package into their applications and use adaptive components such as buttons, cards, tables, forms, navigation bars, dialogs, tooltips, dropdowns, and layout components. These components automatically respond to the user profile and update the interface accordingly.
            </p>
            <p className="mt-4">
              If the browser extension or backend profile is unavailable, the package can use a fallback personalization mechanism based on basic device and environment information. This ensures that users still receive a basic adaptive experience even without full system connectivity.
            </p>
            <p className="mt-4 italic text-sm">This layer makes AURA practical for real-world development by allowing adaptive UI behavior to be added without rebuilding the entire application from the beginning.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-base-300 flex items-center justify-center text-sm">4</span>
              Adaptive Optimization Engine
            </h4>
            <p>
              The adaptive optimization engine continuously improves the personalization process using feedback-driven learning. While the machine learning engine generates the initial adaptive profile, the optimization engine observes how well those changes perform during real usage.
            </p>
            <p className="mt-4">
              The system collects both explicit and implicit feedback. Explicit feedback is gathered when users indicate whether the applied interface changes are helpful. Implicit feedback is collected from behavior such as reduced misclicks, smoother scrolling, lower rage clicks, better task completion, and improved engagement.
            </p>
            <p className="mt-4">
              A reinforcement learning-based approach is used to adjust UI settings over time. Possible adaptations include changes to font size, spacing, contrast, layout density, and target size. The system learns which combinations produce better usability and satisfaction for each user.
            </p>
            <p className="mt-4">
              To prevent inaccurate learning, the system also detects temporary or unusual sessions. If the current behavior does not match the user’s long-term interaction pattern, that session can be excluded from optimization updates.
            </p>
            <p className="mt-4 italic text-sm">This component ensures that AURA does not remain static after the first prediction. Instead, it continuously evolves based on user behavior and feedback.</p>
          </div>
        </div>
      </Section>

      <Section icon={<FaCode />} title="Technologies Used" id="technologies">
        <div className="space-y-10">
          {RESEARCH_TECHNOLOGIES.map((tech) => (
            <div key={tech.title} className="pb-8 border-b border-base-200 last:border-0">
              <h4 className="font-bold text-base-content mb-5 flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {tech.title}
              </h4>
              <div className="flex flex-wrap gap-2 pl-5">
                {tech.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 rounded-full bg-base-200 text-base-content/70 text-xs font-semibold border border-base-300 hover:bg-base-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
