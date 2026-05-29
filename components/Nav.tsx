import Image from "next/image";
import { brand, nav } from "@/lib/content";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3 flex justify-between items-center bg-bg/95 backdrop-blur-xl border-b border-[rgba(139,128,255,0.18)]">
      <div className="flex items-center gap-2.5">
        <Image src="/images/logo-optimized.png" alt={brand.name} width={32} height={32} className="rounded-md" />
        <span className="text-sm md:text-base font-extrabold text-accent tracking-tight">{brand.name}</span>
      </div>
      <div className="hidden md:flex gap-6">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-text-muted text-[13px] font-medium hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#contacto"
        className="bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-cta-orange-hover hover:-translate-y-px transition-all"
      >
        {nav.cta}
      </a>
    </nav>
  );
}
