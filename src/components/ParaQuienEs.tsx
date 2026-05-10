"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  {
    title: "Emprendedoras",
    description:
      "Que buscan organizar su marca, comunicar con estrategia y crecer con dirección clara.",
  },
  {
    title: "Proyectos con propósito",
    description:
      "Que necesitan estructura, identidad de marca y estrategia de contenido para crecer.",
  },
  {
    title: "Líderes en formación",
    description:
      "Que desean fortalecer su comunicación, liderazgo y presencia profesional.",
  },
];

export default function ParaQuienEs() {
  const containerRef = useScrollReveal();

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div data-reveal>
            <p className="text-sage font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
              Audiencia
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-carbon leading-tight">
              ¿Para quién es?
            </h2>
          </div>

          <div className="space-y-8">
            {audiences.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={String(i * 100)}
                className="flex gap-5 items-start group"
              >
                <span className="w-8 h-8 shrink-0 rounded-full bg-sage/10 text-sage flex items-center justify-center text-sm font-bold mt-0.5 group-hover:bg-sage group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-carbon mb-1">
                    {item.title}
                  </h3>
                  <p className="text-carbon/70 leading-relaxed text-[0.95rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
