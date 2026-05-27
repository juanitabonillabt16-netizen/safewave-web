import { program } from "@/lib/content";

export function Program() {
  return (
    <section className="section-padding bg-white" id="programa">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {program.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{program.title}</h2>
          <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-[1.7]">{program.subtitle}</p>
        </div>
        <div
          className="bg-white border-2 border-accent-mint rounded-[20px] p-6 md:p-10 mt-9"
          style={{ boxShadow: "0 8px 32px rgba(27,58,31,0.1)" }}
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="bg-accent text-white px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider">
              {program.badge}
            </span>
            <h3 className="text-[22px] md:text-[26px] font-black text-accent">Todo lo que incluye:</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {program.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 py-2.5">
                <span className="text-accent-medium font-bold text-base flex-shrink-0">✓</span>
                <span className="text-sm text-text-secondary">
                  <strong>{feature.bold}</strong> {feature.text}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-[10px] text-base font-bold hover:bg-cta-orange-hover hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: "0 4px 12px rgba(46,125,50,0.3)" }}
            >
              {program.cta} <span>→</span>
            </a>
            <p className="mt-2.5 text-[13px] text-text-muted">{program.ctaSub}</p>
          </div>
          <div className="bg-accent-bg border border-accent-mint rounded-xl p-5 text-center mt-5">
            <h4 className="text-[15px] font-bold text-accent mb-1.5">{program.guarantee.title}</h4>
            <p className="text-[13px] text-text-secondary">{program.guarantee.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
