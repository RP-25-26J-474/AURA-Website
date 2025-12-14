import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docsMap } from "../../docs";

export default function DocsContent() {
  const { "*": slug } = useParams();

  const content = docsMap[slug || "getting-started"];

  if (!content) {
    return <Navigate to="/docs/getting-started" replace />;
  }

  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}