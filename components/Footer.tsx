import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-text text-white px-6 md:px-10 py-10 text-center">
      <p className="text-sm">{footer.copyright}</p>
      <p className="text-xs opacity-70 mt-1.5">{footer.tagline}</p>
    </footer>
  );
}
