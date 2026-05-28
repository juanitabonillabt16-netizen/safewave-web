import { program } from "@/lib/content";

export function Program() {
  return (
    <section className="section-padding bg-white" id="programas">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {program.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{program.title}</h2>
          <p className="text-base text-text-secondary max-w-[640px] mx-auto leading-[1.7]">{program.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10">
          {program.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white border-2 rounded-[20px] p-6 md:p-8 flex flex-col ${
                pkg.featured ? "border-accent" : "border-accent-mint"
              }`}
              style={{
                boxShadow: pkg.featured
                  ? "0 12px 40px rgba(46,125,50,0.18)"
                  : "0 8px 24px rgba(27,58,31,0.08)",
              }}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase whitespace-nowrap">
                    {pkg.tag}
                  </span>
                </div>
              )}

              <div className="text-center mb-5 pt-2">
                <h3 className="text-[22px] md:text-[26px] font-black text-text mb-1">{pkg.name}</h3>
                {!pkg.featured && <p className="text-xs text-text-muted uppercase tracking-wider">{pkg.tag}</p>}
              </div>

              <div className="text-center mb-5">
                <div className="text-[44px] md:text-[52px] font-black text-accent leading-none">{pkg.price}</div>
                <div className="text-xs text-text-muted mt-1">{pkg.priceNote}</div>
              </div>

              <div className="bg-accent-bg border border-accent-mint rounded-xl p-3 mb-5 text-center">
                <div className="text-sm font-bold text-text">{pkg.duration}</div>
                <div className="text-xs text-text-secondary mt-0.5">{pkg.schedule}</div>
              </div>

              <p className="text-[13px] text-text-muted italic text-center mb-4">{pkg.audience}</p>

              <ul className="flex-1 space-y-2.5 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="text-accent-medium font-bold flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent-bg/60 border border-accent-mint rounded-lg p-3 mb-5 text-center">
                <p className="text-[13px] text-text-secondary leading-relaxed">{pkg.result}</p>
              </div>

              <a
                href="#contacto"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] text-base font-bold transition-all ${
                  pkg.featured
                    ? "bg-accent text-white hover:bg-cta-orange-hover hover:-translate-y-0.5"
                    : "bg-white text-accent border-2 border-accent-mint hover:bg-accent-bg hover:border-accent"
                }`}
                style={pkg.featured ? { boxShadow: "0 4px 12px rgba(46,125,50,0.3)" } : undefined}
              >
                {pkg.cta} <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-text-muted mt-6">{program.footnote}</p>
      </div>
    </section>
  );
}
