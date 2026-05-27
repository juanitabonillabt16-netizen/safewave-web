import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="como-funciona">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {howItWorks.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{howItWorks.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
          {howItWorks.steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white text-xl font-black flex items-center justify-center mx-auto mb-3">
                {step.num}
              </div>
              <h4 className="text-base font-bold mb-1.5 text-text">{step.title}</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
