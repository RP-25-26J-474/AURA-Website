import { FaFilePdf, FaLock, FaArrowDown } from "react-icons/fa6";

const docs = [
  { title: "Project Charter", status: "locked", size: "1.2 MB" },
  { title: "Proposal Document", status: "locked", size: "2.5 MB" },
  { title: "Check List Documents", status: "locked", size: "0.8 MB" },
  { title: "Final Document", status: "locked", size: "15.0 MB" },
];

const DocCard = ({ doc }) => (
  <div className="group p-6 rounded-3xl bg-base-100 border border-base-300 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
    <div className="mb-6">
      <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform">
        <FaFilePdf />
      </div>
      <h3 className="text-lg font-bold text-base-content mb-1 group-hover:text-primary transition-colors">{doc.title}</h3>
      <p className="text-xs text-base-content/40 font-medium uppercase tracking-widest">{doc.size} · PDF</p>
    </div>
    
    {doc.status === "locked" ? (
      <button className="btn btn-block btn-sm btn-ghost bg-base-200 border-base-300 pointer-events-none opacity-60 gap-2">
        <FaLock className="text-[10px]" /> 
        <span className="text-[11px] font-bold uppercase">Restricted</span>
      </button>
    ) : (
      <button className="btn btn-block btn-sm btn-primary gap-2">
        <FaArrowDown className="text-[10px]" /> 
        <span className="text-[11px] font-bold uppercase tracking-tight">Download</span>
      </button>
    )}
  </div>
);

export default function Documents() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-base-content mb-4 tracking-tight">Project Documents</h1>
        <p className="text-lg text-base-content/50 max-w-2xl">
          Official documentation, reports, and administrative files related to the AURA project.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {docs.map((doc) => (
          <DocCard key={doc.title} doc={doc} />
        ))}
      </div>

      <div className="mt-16 p-8 rounded-3xl bg-base-200 border border-base-300 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center text-2xl text-base-content/30 mb-4">
          <FaLock />
        </div>
        <h4 className="text-xl font-bold text-base-content mb-2">Access Restricted</h4>
        <p className="text-base-content/50 text-sm max-w-md">
          Research documents are currently restricted to authorized personnel and academic evaluators. Links will be made public upon final publication.
        </p>
      </div>
    </div>
  );
}
