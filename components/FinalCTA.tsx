"use client";

import { useState } from "react";
import { brand, finalCta } from "@/lib/content";

export function FinalCTA() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    (data as Record<string, string>).source = "safewaveacademy.com";
    try {
      await fetch(brand.leadWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // n8n may not return CORS headers - lead still arrives
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <section className="section-padding bg-accent text-white" id="contacto">
      <div className="container-narrow text-center">
        <h2 className="font-extrabold leading-[1.2] mb-4 text-[clamp(26px,4vw,40px)]">
          {finalCta.titleStart} <span className="text-accent-mint">{finalCta.titleHighlight}</span>
        </h2>
        <p className="text-base md:text-lg opacity-95 max-w-[680px] mx-auto leading-[1.7] mb-8">{finalCta.subtitle}</p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white text-text rounded-[20px] p-6 md:p-8 max-w-[600px] mx-auto grid gap-3"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}
          >
            <input
              type="text"
              name="full_name"
              placeholder={finalCta.form.fullNamePlaceholder}
              required
              className="w-full px-4 py-3.5 rounded-[10px] border-2 border-accent-mint bg-white text-text text-base focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder={finalCta.form.phonePlaceholder}
              required
              className="w-full px-4 py-3.5 rounded-[10px] border-2 border-accent-mint bg-white text-text text-base focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder={finalCta.form.emailPlaceholder}
              required
              className="w-full px-4 py-3.5 rounded-[10px] border-2 border-accent-mint bg-white text-text text-base focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="text"
              name="child_name"
              placeholder={finalCta.form.childNamePlaceholder}
              className="w-full px-4 py-3.5 rounded-[10px] border-2 border-accent-mint bg-white text-text text-base focus:outline-none focus:border-accent transition-colors"
            />
            <select
              name="child_age"
              defaultValue=""
              required
              className="w-full px-4 py-3.5 rounded-[10px] border-2 border-accent-mint bg-white text-text text-base focus:outline-none focus:border-accent transition-colors"
            >
              <option value="" disabled>
                {finalCta.form.ageLabel}
              </option>
              {finalCta.form.ageOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-white px-6 py-4 rounded-[10px] text-base font-bold hover:bg-cta-orange-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ boxShadow: "0 4px 12px rgba(46,125,50,0.3)" }}
            >
              {submitting ? finalCta.form.submittingLabel : `${finalCta.form.submitLabel} →`}
            </button>
          </form>
        ) : (
          <div className="bg-white text-text rounded-[20px] p-8 max-w-[600px] mx-auto">
            <h3 className="text-2xl font-black text-accent mb-3">{finalCta.success.title}</h3>
            <p className="text-base text-text-secondary leading-[1.7]">{finalCta.success.text}</p>
          </div>
        )}

        <p className="mt-5 text-sm opacity-90">
          {finalCta.fallback}{" "}
          <a
            href={`https://api.whatsapp.com/send?phone=${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappMessage)}`}
            target="_blank"
            rel="noopener"
            className="text-white font-semibold underline"
          >
            Escribenos aqui
          </a>
          {" · Instagram: "}
          <a href={brand.instagramUrl} target="_blank" rel="noopener" className="text-white font-semibold underline">
            @{brand.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
