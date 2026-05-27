import Image from "next/image";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {gallery.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{gallery.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {gallery.images.map((img, i) => (
            <div key={i} className="relative w-full h-[250px] rounded-[14px] overflow-hidden border border-[rgba(46,125,50,0.12)]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
