import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO";
import abhayawardhane from "../../assets/images/team/abhayawardhane.jpg";
import dias from "../../assets/images/team/dias.webp";
import rajapaksha from "../../assets/images/team/rajapaksha.jpg";
import jayalath from "../../assets/images/team/jayalath.webp";
import jagath from "../../assets/images/team/mrjagath.jpg";
import madusha from "../../assets/images/team/msmadusha.jpg";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Pahan Abhayawardhane",
    email: "pahanabhayawardhane@gmail.com",
    github: "https://github.com/Pahan-Samudika",
    image: abhayawardhane,
    role: "Core Developer",
    bio: "Driving the core ML adaptation logic and system architecture."
  },
  {
    name: "Sandali Dias",
    email: "ssd.dias29@gmail.com",
    github: "https://github.com/SandaliDias",
    image: dias,
    role: "UI/UX Designer",
    bio: "Crafting intuitive and accessible design systems for AURA."
  },
  {
    name: "Dinithi Rajapaksha",
    email: "dinithirajapaksha@gmail.com",
    github: "https://github.com/DinithiTR",
    image: rajapaksha,
    role: "Frontend Engineer",
    bio: "Implementing high-performance, adaptive React components."
  },
  {
    name: "Dilina Jayalath",
    email: "dspjayalath@gmail.com",
    github: "https://github.com/dilina-jayalath",
    image: jayalath,
    role: "Backend Architect",
    bio: "Architecting the cloud infrastructure for ML profile generation."
  }
];

const supervisors = [
  {
    name: "Mr. Jagath Wickramarathne",
    role: "Supervisor",
    image: jagath,
    bio: "Senior Lecturer at SLIIT. Researcher in Human-Computer Interaction & User Experience Design.",
    linkedin: "https://www.linkedin.com/in/jagath-wickramarathne-7aa79516/"
  },
  {
    name: "Ms. Madusha Weerasooriya",
    role: "Co-Supervisor",
    image: madusha,
    bio: "Assistant Lecturer at SLIIT. Reading MPhil at SLIIT, Sri Lanka.",
    linkedin: "https://www.linkedin.com/in/madusha-weerasooriya-6775861a1/"
  }
];

export default function AboutUs() {
  return (
    <div className="bg-base-100">
      <SEO 
        title="About Us" 
        description="Meet the passionate team behind AURA, dedicated to unleashing the future of UI through ML-powered personalization." 
        canonical="/about-us" 
      />
      {/* Hero Section: Team Introduction */}
      <section className="relative isolate overflow-hidden min-h-[55vh] flex flex-col items-center justify-center px-6 lg:px-8 text-center py-16">
        <div aria-hidden="true" className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden px-36 blur-3xl pointer-events-none">
          <div
            className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-primary to-secondary opacity-10"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          />
        </div>

        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
          About Us
        </span>
        <h1 className="text-5xl font-bold text-base-content sm:text-6xl">
          The team behind <span className="text-primary">AURA</span>
        </h1>
        <p className="mt-5 text-lg text-base-content/55 max-w-xl mx-auto leading-relaxed">
          We are a group of passionate developers and designers committed to building 
          the most intuitive and powerful UI tools for the next generation of web applications.
        </p>
      </section>

      {/* Team Grid: Member Profiles */}
      <section className="border-t border-base-300 bg-base-200 py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Our Team
            </span>
            <h2 className="text-4xl font-bold text-base-content">Creative minds, together</h2>
            <p className="mt-4 text-base-content/55 max-w-xl mx-auto">
              United by a shared vision to make the web more accessible and personalized for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.name} 
                className="group flex flex-col bg-base-100 rounded-2xl border border-base-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="aspect-[4/5] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-base-content group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-base-content/55 leading-relaxed flex-1">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 mt-4">
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-sm bg-base-100/90 text-primary border-none hover:bg-base-100"
                        aria-label="GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="btn btn-circle btn-sm bg-base-100/90 text-primary border-none hover:bg-base-100"
                        aria-label="Email"
                      >
                        <FaEnvelope size={16} />
                      </a>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="border-t border-base-300 bg-base-100 py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Research Guidance
            </span>
            <h2 className="text-4xl font-bold text-base-content">Guided by expertise</h2>
            <p className="mt-4 text-base-content/55 max-w-xl mx-auto">
              We are honored to be supervised by distinguished academics who have 
              instrumentally shaped our research and development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {supervisors.map((supervisor) => (
              <div 
                key={supervisor.name} 
                className="group flex flex-col bg-base-100 rounded-2xl border border-base-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="aspect-[4/5] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={supervisor.image} 
                    alt={supervisor.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{supervisor.role}</span>
                    <h3 className="font-bold text-base-content group-hover:text-primary transition-colors">
                      {supervisor.name}
                    </h3>
                  </div>
                  <p className="text-sm text-base-content/55 leading-relaxed flex-1">
                    {supervisor.bio}
                  </p>
                  {supervisor.linkedin && (
                    <div className="flex gap-3 mt-4">
                      <a 
                        href={supervisor.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-sm bg-base-200 text-primary border-none hover:bg-primary hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement: Core Values */}
      <section className="py-24 px-6 lg:px-8 text-center bg-base-200 border-t border-base-300">
        <div className="mx-auto max-w-4xl px-8 py-12 rounded-3xl border border-primary/20 bg-primary/5 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
          
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl font-bold text-base-content mb-6">Empowering every user</h2>
          <p className="text-lg md:text-xl text-base-content/70 italic leading-relaxed max-w-3xl mx-auto">
            "To empower developers worldwide with cutting-edge UI components and tools 
            that bridge the gap between complex functionality and stunning aesthetics."
          </p>
        </div>
      </section>

      {/* Contact CTA: Footer for the About page */}
      <section className="border-t border-base-300 bg-base-100 py-20 px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-base-content">Interested in our work?</h2>
        <p className="mt-3 text-base-content/55 max-w-xl mx-auto">
          We're always open to collaborating with like-minded developers and organizations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact-us" className="btn btn-primary btn-lg px-8">
            Get in touch
          </Link>
        </div>
      </section>

    </div>
  );
}
