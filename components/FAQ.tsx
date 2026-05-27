import { faq } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section-padding" id="faq">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {faq.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{faq.title}</h2>
        </div>
        <div className="max-w-[800px] mx-auto mt-9 space-y-3">
          {faq.items.map((item, i) => (
            <details
              key={i}
              className="bg-white border border-[rgba(46,125,50,0.12)] rounded-[12px] p-5 group"
              style={{ boxShadow: "0 2px 16px rgba(27,58,31,0.06)" }}
            >
              <summary className="flex justify-between items-center cursor-pointer text-base font-semibold text-text list-none">
                <span>{item.q}</span>
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-text-secondary leading-[1.7]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
