import { problems } from "@/lib/content";

export function Problems() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
          {problems.label}
        </div>
        <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{problems.title}</h2>
        <p className="text-base text-text-secondary max-w-[600px] leading-[1.7]">{problems.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
          {problems.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-[rgba(46,125,50,0.12)] rounded-[14px] p-6"
              style={{ boxShadow: "0 2px 16px rgba(27,58,31,0.06)" }}
            >
              <div className="text-[28px] mb-2.5">{card.icon}</div>
              <h4 className="text-[15px] font-bold mb-1.5 text-text">{card.title}</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
