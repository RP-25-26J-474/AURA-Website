import { FaFilePdf, FaLock, FaArrowDown } from "react-icons/fa6";
import { RESEARCH_DOCUMENTS } from "../../constants/research";

const DocCard = ({ doc }) => {
  const isLocked = !doc.url && doc.status === "locked";
  
  return (
    <div className="group p-6 rounded-3xl bg-base-100 border border-base-300 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform">
          <FaFilePdf />
        </div>
        <h3 className="text-lg font-bold text-base-content mb-1 group-hover:text-primary transition-colors">{doc.title}</h3>
      </div>
      
      {isLocked ? (
        <button className="btn btn-block btn-sm btn-ghost bg-base-200 border-base-300 pointer-events-none opacity-60 gap-2">
          <FaLock className="text-[10px]" /> 
          <span className="text-[11px] font-bold uppercase">Restricted</span>
        </button>
      ) : (
        <a 
          href={doc.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-block btn-sm btn-primary gap-2"
        >
          <FaArrowDown className="text-[10px]" /> 
          <span className="text-[11px] font-bold uppercase tracking-tight">View / Download</span>
        </a>
      )}
    </div>
  );
};

export default function Documents() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4 tracking-tight">Project Documents</h1>
        <p className="text-lg text-base-content/50">
          Official documentation, reports, and administrative files related to the AURA project.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {RESEARCH_DOCUMENTS.map((doc) => (
          <DocCard key={doc.title} doc={doc} />
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center gap-6 p-8 rounded-[2rem] bg-base-200/50 border border-base-300">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
          <FaLock />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-base-content mb-1">Ongoing Submissions</h4>
          <p className="text-sm text-base-content/50 leading-relaxed text-justify">
            Research documents and technical reports are updated periodically following academic evaluations. Final documentation will be uploaded upon the successful completion of the viva voce and project defense.
          </p>
        </div>
      </div>
    </div>
  );
}
