import { FaFilePowerpoint, FaLock, FaArrowDown } from "react-icons/fa6";

const presentations = [
  { title: "Proposal Presentation", status: "locked", size: "4.8 MB" },
  { title: "Progress Presentation - 1", status: "locked", size: "5.2 MB" },
  { title: "Progress Presentation - 2", status: "locked", size: "6.1 MB" },
  { title: "Final Presentation", status: "locked", size: "12.5 MB" },
];

const PresCard = ({ pres }) => (
  <div className="group p-6 rounded-3xl bg-base-100 border border-base-300 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
    <div className="mb-6">
      <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-secondary text-2xl mb-4 group-hover:scale-110 transition-transform">
        <FaFilePowerpoint />
      </div>
      <h3 className="text-lg font-bold text-base-content mb-1 group-hover:text-secondary transition-colors">{pres.title}</h3>
      <p className="text-xs text-base-content/40 font-medium uppercase tracking-widest">{pres.size} · PPTX</p>
    </div>
    
    {pres.status === "locked" ? (
      <button className="btn btn-block btn-sm btn-ghost bg-base-200 border-base-300 pointer-events-none opacity-60 gap-2">
        <FaLock className="text-[10px]" /> 
        <span className="text-[11px] font-bold uppercase">Restricted</span>
      </button>
    ) : (
      <button className="btn btn-block btn-sm btn-secondary gap-2 text-secondary-content">
        <FaArrowDown className="text-[10px]" /> 
        <span className="text-[11px] font-bold uppercase tracking-tight">Download</span>
      </button>
    )}
  </div>
);

export default function Presentations() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-base-content mb-4 tracking-tight">Project Presentations</h1>
        <p className="text-lg text-base-content/50 max-w-2xl">
          Visual materials and slide decks used for academic presentations and demonstrations.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {presentations.map((pres) => (
          <PresCard key={pres.title} pres={pres} />
        ))}
      </div>

      <div className="mt-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-2xl text-secondary/40 mb-4">
          <FaFilePowerpoint />
        </div>
        <h4 className="text-xl font-bold text-base-content mb-2">Available Soon</h4>
        <p className="text-base-content/50 text-sm max-w-md text-justify">
          Presentation slides are undergoing final revisions. Links will be active after each respective milestone is completed and verified.
        </p>
      </div>
    </div>
  );
}
