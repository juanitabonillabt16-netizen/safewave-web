import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block bg-accent-bg border border-accent-mint px-3.5 py-1 rounded-[20px] text-[11px] font-semibold tracking-wider uppercase text-accent mb-4">
            {testimonials.label}
          </div>
          <h2 className="font-extrabold leading-[1.2] mb-3 text-text text-[clamp(24px,3.5vw,36px)]">{testimonials.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
          {testimonials.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-[rgba(46,125,50,0.12)] rounded-[14px] p-6"
              style={{ boxShadow: "0 2px 16px rgba(27,58,31,0.06)" }}
            >
              <div className="text-warm text-lg mb-2">{"★".repeat(review.stars)}</div>
              <p className="text-sm text-text-secondary leading-[1.7] mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-mint text-accent font-bold text-sm flex items-center justify-center">
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-text">{review.author}</div>
                  <div className="text-xs text-text-muted">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
