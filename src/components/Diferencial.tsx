"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const pilares = [
  { label: "Experiencia real" },
  { label: "Liderazgo" },
  { label: "Emprendimiento" },
  { label: "Tecnología" },
  { label: "Comunicación" },
  { label: "Comunidad" },
];

export default function Diferencial() {
  const containerRef = useScrollReveal();

  return (
    <section className="py-32 bg-carbon text-white relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-carbon via-carbon-light/30 to-carbon" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sage/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <p className="text-gold font-semibold text-[10px] tracking-[0.2em] uppercase" data-reveal>
              Diferencial
            </p>
            <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold leading-tight" data-reveal data-reveal-delay="80">
              ¿Qué hace diferente este{" "}
              <span className="text-sage-light italic">enfoque</span>?
            </h2>
            <p className="text-white/75 leading-relaxed text-lg" data-reveal data-reveal-delay="160">
              No acompaño únicamente desde la teoría. Integro experiencia real,
              liderazgo, emprendimiento, tecnología, comunicación y construcción
              de comunidad.
            </p>
            <div className="w-16 h-[1px] bg-gold/40" data-reveal data-reveal-delay="200" />
            <p className="text-white/60 leading-relaxed" data-reveal data-reveal-delay="240">
              La propuesta une estrategia, humanidad, estructura, comunicación y
              dirección clara para crear procesos sostenibles de crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pilares.map((pilar, i) => (
              <div
                key={pilar.label}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="p-1 rounded-[1.25rem] bg-white/[0.03] ring-1 ring-white/[0.06] hover:ring-sage/30 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="bg-white/[0.04] backdrop-blur-sm rounded-[calc(1.25rem-0.25rem)] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-sage/10 transition-colors duration-500">
                  <p className="text-sm font-medium text-white/75">
                    {pilar.label}
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
