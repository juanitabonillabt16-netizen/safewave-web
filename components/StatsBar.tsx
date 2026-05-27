import { statsBar } from "@/lib/content";

export function StatsBar() {
  return (
    <div className="bg-accent px-6 md:px-10 py-6 flex justify-center gap-10 md:gap-16 flex-wrap">
      {statsBar.map((stat, i) => (
        <div key={i} className="text-center text-white">
          <div className="text-[28px] font-black">{stat.num}</div>
          <div className="text-xs opacity-80 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
