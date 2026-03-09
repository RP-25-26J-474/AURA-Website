import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docsMap } from "../../docs";
import { FaCopy, FaCheck } from "react-icons/fa6";

/** Beautiful code block component */
function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace("language-", "") ?? "text";
  const code = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-5 rounded-xl overflow-hidden border border-base-content/10">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-base-300 border-b border-base-content/10">
        <span className="text-xs font-mono font-semibold text-base-content/40 uppercase tracking-wide">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-base-content/40 hover:text-base-content transition-colors"
        >
          {copied ? (
            <>
              <FaCheck className="text-primary" />
              <span className="text-primary">Copied!</span>
            </>
          ) : (
            <>
              <FaCopy />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code */}
      <pre className="overflow-x-auto bg-base-300 px-5 py-4 text-sm font-mono leading-relaxed text-base-content/85">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** Inline code */
function InlineCode({ children }) {
  return (
    <code className="font-mono text-[0.84em] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
      {children}
    </code>
  );
}

/** Custom table */
function Table({ children }) {
  return (
    <div className="overflow-x-auto my-5 rounded-xl border border-base-300">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-base-content/40 bg-base-200 border-b border-base-300">
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td className="px-4 py-2.5 text-base-content/70 border-b border-base-300/50 last:border-0">
      {children}
    </td>
  );
}

/** Blockquote as callout */
function Blockquote({ children }) {
  return (
    <div className="my-5 flex gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-4">
      <span className="text-primary mt-0.5 flex-shrink-0">💡</span>
      <div className="text-sm text-base-content/75 leading-relaxed [&>p]:mb-0">{children}</div>
    </div>
  );
}

const components = {
  code: ({ node, inline, className, children, ...props }) =>
    inline ? (
      <InlineCode>{children}</InlineCode>
    ) : (
      <CodeBlock className={className}>{children}</CodeBlock>
    ),
  table: ({ children }) => <Table>{children}</Table>,
  th: ({ children }) => <Th>{children}</Th>,
  td: ({ children }) => <Td>{children}</Td>,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-base-content mt-0 mb-4 pb-3 border-b border-base-300">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-base-content mt-10 mb-3 pb-2 border-b border-base-300/60">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-bold text-base-content mt-7 mb-2">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-sm font-bold text-base-content/80 uppercase tracking-wide mt-5 mb-1.5">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-base-content/70 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-primary hover:underline" target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-3 space-y-1.5 pl-5 list-disc marker:text-primary/50">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 space-y-1.5 pl-5 list-decimal marker:text-primary/50">{children}</ol>
  ),
  li: ({ children }) => <li className="text-base-content/70 leading-relaxed">{children}</li>,
  hr: () => <hr className="my-8 border-base-300" />,
  strong: ({ children }) => <strong className="text-base-content font-semibold">{children}</strong>,
};

export default function DocsContent() {
  const { "*": slug } = useParams();
  const content = docsMap[slug || "getting-started"];

  if (!content) {
    return <Navigate to="/docs/getting-started" replace />;
  }

  return (
    <article>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}