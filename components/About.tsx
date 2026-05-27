import Image from "next/image";
import { about } from "@/lib/content";

export function About() {
  return (
    <section className="section-padding bg-white" id="sobre">
      <div className="container-narrow">
        <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
          {about.label}
        </div>
        <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{about.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mt-9 items-start">
          <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-[20px] overflow-hidden border-2 border-accent-mint">
            <Image src={about.image} alt={about.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-[26px] font-black text-accent mb-4">{about.name}</h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-text-secondary leading-[1.7] mb-3">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 mt-5">
              {about.credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-block bg-accent-bg border border-accent-mint text-accent text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
