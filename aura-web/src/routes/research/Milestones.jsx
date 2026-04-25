import { FaCircleCheck, FaCircleDot, FaClock } from "react-icons/fa6";
import { RESEARCH_MILESTONES } from "../../constants/research";

const StatusBadge = ({ status }) => {
  switch (status) {
    case "completed":
      return <span className="badge badge-success badge-sm gap-1 text-[10px] font-bold uppercase"><FaCircleCheck /> Completed</span>;
    case "in-progress":
      return <span className="badge badge-warning badge-sm gap-1 text-[10px] font-bold uppercase"><FaCircleDot /> In Progress</span>;
    default:
      return <span className="badge badge-ghost badge-sm gap-1 text-[10px] font-bold uppercase border-base-300"><FaClock /> Upcoming</span>;
  }
};

export default function Milestones() {
  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4 tracking-tight">Project Milestones</h1>
        <p className="text-lg text-base-content/50 text-justify">
          The AURA research project is being developed and evaluated by undergraduate students at the <strong>Sri Lanka Institute of Information Technology (SLIIT)</strong>. Our work is subjected to assessment by a panel of research experts and academic supervisors throughout the project lifecycle.
        </p>
      </header>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-base-300" />

        <div className="space-y-12">
          {RESEARCH_MILESTONES.map((ms, i) => (
            <div key={ms.title} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-base-100 border-4 border-primary z-10 shadow-lg" />

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <div className={`p-6 rounded-3xl bg-base-100 border border-primary/50 transition-all duration-300 hover:shadow-xl group ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`flex flex-col mb-2 ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <StatusBadge status={ms.status} />
                    <h3 className="text-xl font-bold text-base-content mt-3 group-hover:text-primary transition-colors">{ms.title}</h3>
                  </div>
                  <p className="text-base-content/60 text-sm leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block w-[10%]" />
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
