import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mt-12 mb-3 text-3xl tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-12 mb-3 text-2xl tracking-tight">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-12 mb-3 text-lg tracking-tight">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mb-3 text-base tracking-tight">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="mb-3 text-base text-neutral-300/75">{children}</p>
        ),
        br: () => <br />,
      }}
      remarkPlugins={[remarkBreaks, remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
