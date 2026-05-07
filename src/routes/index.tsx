import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calendar, MapPin, Clock, Heart, Gem } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "حفل زفاف فارس و إسراء — 18 مايو 2026" },
      { name: "description", content: "دعوة لحضور حفل زفاف فارس و إسراء في 18 مايو 2026 بقاعة Ociel" },
      { property: "og:title", content: "حفل زفاف فارس و إسراء" },
      { property: "og:description", content: "يسعدنا دعوتكم لمشاركتنا فرحتنا — 18 مايو 2026" },
    ],
  }),
  component: Invitation,
});

const VENUE_URL =
  "https://www.google.com/maps/place/Ociel/data=!4m2!3m1!1s0x14f79d0493021c27:0x21cd5fc4e3d09fa9";

function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6 text-gold">
      <span className="h-px w-16 bg-gold-gradient opacity-70" />
      <Gem className="w-4 h-4" style={{ color: "var(--gold)" }} />
      <span className="h-px w-16 bg-gold-gradient opacity-70" />
    </div>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute w-24 h-24 md:w-32 md:h-32 ${className}`}
      fill="none"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
      aria-hidden
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE978" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      <path d="M5 5 Q 50 5 50 50" />
      <path d="M5 5 Q 5 50 50 50" />
      <circle cx="5" cy="5" r="2.5" fill="#FFD700" stroke="none" />
      <path d="M15 15 Q 30 18 35 35 Q 18 30 15 15 Z" opacity="0.7" />
      <path d="M50 50 Q 40 40 30 50 Q 40 45 50 50" opacity="0.5" />
    </svg>
  );
}

function Countdown() {
  const target = new Date("2026-05-18T19:00:00").getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = now === null ? 0 : Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const mins = Math.floor((diff / 60000) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const items = [
    { label: "يوم", value: days },
    { label: "ساعة", value: hours },
    { label: "دقيقة", value: mins },
    { label: "ثانية", value: secs },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-xl bg-card border border-gold/40 shadow-soft p-3 md:p-4 text-center"
        >
          <div className="text-2xl md:text-4xl font-bold text-gold-gradient tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function Invitation() {
  return (
    <div dir="rtl" className="min-h-screen relative overflow-hidden">
      {/* Decorative background flourishes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 90%, var(--gold-deep) 0, transparent 40%)",
        }}
      />

      <main className="relative max-w-3xl mx-auto px-4 py-10 md:py-16">
        {/* Hero card */}
        <section className="relative rounded-3xl bg-card/90 backdrop-blur border border-gold/40 shadow-gold p-6 md:p-12 text-center overflow-hidden">
          <CornerOrnament className="top-2 right-2" />
          <CornerOrnament className="top-2 left-2 -scale-x-100" />
          <CornerOrnament className="bottom-2 right-2 -scale-y-100" />
          <CornerOrnament className="bottom-2 left-2 -scale-100" />

          <p className="text-sm md:text-base tracking-[0.4em] text-gold-deep uppercase">
            دعوة زفاف
          </p>
          <OrnamentDivider />

          <p className="text-base md:text-lg text-muted-foreground mb-2">
            يتشرّفان بدعوتكم لحضور حفل زفافهما
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-tight my-4">
            <span className="text-gold-gradient">فارس</span>
            <span className="mx-3 md:mx-5 inline-block align-middle">
              <Heart
                className="w-7 h-7 md:w-10 md:h-10 inline"
                style={{ color: "var(--gold)", fill: "var(--gold-soft)" }}
              />
            </span>
            <span className="text-gold-gradient">إسراء</span>
          </h1>

          <p className="text-muted-foreground italic max-w-lg mx-auto leading-relaxed">
            «وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»
          </p>

          <OrnamentDivider />

          {/* Date / Time / Place */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <InfoTile icon={<Calendar />} title="التاريخ" value="18 مايو 2026" sub="يوم الإثنين" />
            <InfoTile icon={<Clock />} title="الموعد" value="7:00 مساءً" sub="نتشرّف بحضوركم" />
            <InfoTile icon={<MapPin />} title="المكان" value="قاعة Ociel" sub="اضغط للاتجاهات" href={VENUE_URL} />
          </div>
        </section>

        {/* Countdown */}
        <section className="mt-10 md:mt-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-gold-gradient mb-6">
            العدّ التنازلي للفرحة
          </h2>
          <Countdown />
        </section>

        {/* Map CTA */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-3xl border border-gold/40 bg-card/90 shadow-soft p-6 md:p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-gold-gradient mb-3">
              مكان الحفل
            </h2>
            <p className="text-muted-foreground mb-5">قاعة Ociel — نسعد بحضوركم في تمام الموعد</p>
            <a
              href={VENUE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:opacity-95 transition"
            >
              <MapPin className="w-5 h-5" />
              فتح الموقع على الخريطة
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <OrnamentDivider />
          <p className="text-sm text-muted-foreground">
            حضوركم أجمل هديّة — فارس و إسراء
          </p>
        </footer>
      </main>
    </div>
  );
}

function InfoTile({
  icon,
  title,
  value,
  sub,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-2xl border border-gold/40 bg-cream/60 p-5 h-full flex flex-col items-center justify-center text-center hover:shadow-gold transition">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gold-gradient text-primary-foreground mb-3 shadow-soft"
        aria-hidden
      >
        <span className="[&>svg]:w-6 [&>svg]:h-6">{icon}</span>
      </div>
      <div className="text-xs uppercase tracking-widest text-gold-deep">{title}</div>
      <div className="font-display text-xl md:text-2xl mt-1">{value}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
