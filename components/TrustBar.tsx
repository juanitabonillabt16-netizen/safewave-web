import { trustBar } from "@/lib/content";

export function TrustBar() {
  return (
    <div className="bg-white px-6 md:px-10 py-5 flex justify-center gap-6 md:gap-10 flex-wrap border-b border-[rgba(46,125,50,0.12)]">
      {trustBar.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-[13px] text-text-secondary">
          <span className="text-lg">{item.icon}</span>
          <span>
            {item.bold && <strong className="text-accent">{item.bold} </strong>}
            {!item.bold && item.text}
            {item.bold && `- ${item.text}`}
          </span>
          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener"
              className="text-accent text-xs font-semibold no-underline ml-1"
            >
              {item.link.label} →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
