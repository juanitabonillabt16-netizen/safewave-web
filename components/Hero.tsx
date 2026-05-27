import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-10 pt-32 pb-20 relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, var(--color-bg) 100%)",
      }}
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        width={280}
        height={180}
        className="rounded-2xl border-2 border-accent-mint mb-5"
        style={{ boxShadow: "0 8px 24px rgba(46,125,50,0.15)", objectFit: "cover" }}
      />
      <div className="inline-block bg-accent-bg border border-accent-mint px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-accent mb-5">
        {hero.badge}
      </div>
      <h1 className="font-black leading-[1.15] mb-5 max-w-[750px] tracking-tight text-text text-[clamp(30px,5vw,48px)]">
        {hero.titleStart}{" "}
        <span className="text-accent">{hero.titleHighlight}</span>
      </h1>
      <p className="text-[17px] text-text-secondary max-w-[580px] leading-[1.7] mb-8">{hero.subtitle}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-[10px] text-base font-bold hover:bg-cta-orange-hover hover:-translate-y-0.5 transition-all"
          style={{ boxShadow: "0 4px 12px rgba(46,125,50,0.3)" }}
        >
          {hero.primaryCta} <span>→</span>
        </a>
        <a
          href="#programa"
          className="inline-flex items-center gap-2 bg-transparent text-accent px-8 py-4 rounded-[10px] text-base font-semibold border-2 border-accent-mint hover:bg-accent-bg hover:border-accent transition-all"
        >
          {hero.secondaryCta}
        </a>
      </div>
      <div className="flex gap-10 mt-12">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[28px] font-black text-accent">{stat.number}</div>
            <div className="text-[11px] text-text-muted uppercase tracking-wider mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
