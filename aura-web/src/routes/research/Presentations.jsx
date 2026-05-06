import { FaFilePowerpoint, FaLock, FaArrowDown } from "react-icons/fa6";
import { RESEARCH_PRESENTATIONS } from "../../constants/research";

const getDownloadUrl = (url) => {
  if (!url) return "";
  const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
  }
  return url;
};

const PresCard = ({ pres }) => {
  const isLocked = !pres.url && pres.status === "locked";
  const downloadUrl = getDownloadUrl(pres.url);
  const isFolder = pres.url && pres.url.includes("/folders/");

  return (
    <div className="group p-6 rounded-3xl bg-base-100 border border-primary/40 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform">
          <FaFilePowerpoint />
        </div>
        <h3 className="text-lg font-bold text-base-content mb-1 group-hover:text-primary transition-colors">{pres.title}</h3>
      </div>
      
      {isLocked ? (
        <button className="btn btn-block btn-sm btn-ghost bg-base-200 border-base-300 pointer-events-none opacity-60 gap-2">
          <FaLock className="text-[10px]" /> 
          <span className="text-[11px] font-bold uppercase">Restricted</span>
        </button>
      ) : (
        <a 
          href={downloadUrl} 
          download={!isFolder}
          target={isFolder ? "_blank" : undefined} 
          rel={isFolder ? "noopener noreferrer" : undefined} 
          className="btn btn-block btn-sm btn-primary gap-2 text-primary-content"
        >
          <FaArrowDown className="text-[10px]" /> 
          <span className="text-[11px] font-bold uppercase tracking-tight">
            {isFolder ? "View Folder" : "Download"}
          </span>
        </a>
      )}
    </div>
  );
};

export default function Presentations() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4 tracking-tight">Project Presentations</h1>
        <p className="text-lg text-base-content/50">
          Visual materials and slide decks used for academic presentations and demonstrations.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {RESEARCH_PRESENTATIONS.map((pres) => (
          <PresCard key={pres.title} pres={pres} />
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center gap-6 p-8 rounded-[2rem] bg-base-200/50 border border-base-300">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
          <FaFilePowerpoint />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-base-content mb-1">Ongoing Submissions</h4>
          <p className="text-sm text-base-content/50 leading-relaxed text-justify">
            Presentation materials are updated periodically following academic evaluations. Final presentation slides will be uploaded upon the successful completion of the viva voce and project defense.
          </p>
        </div>
      </div>
    </div>
  );
}
