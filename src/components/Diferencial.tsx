"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pilares = [
  {
    numero: "01",
    titulo: "Más de 10 años de experiencia real",
    texto:
      "Liderando procesos en gestión humana, administración y dirección estratégica. No acompaño desde la teoría, acompaño desde lo vivido.",
  },
  {
    numero: "02",
    titulo: "También he estado en tu lugar",
    texto:
      "Durante 4 años construí mi propio emprendimiento. Viví los retos, aprendizajes y decisiones que implica emprender desde cero, y esa experiencia hoy me permite acompañar desde lo real.",
  },
  {
    numero: "03",
    titulo: "Crecer en comunidad transforma",
    texto:
      "Con Emprendiendo Juntas construimos una red de apoyo, crecimiento y conexión real. Acompaño emprendedoras entendiendo sus desafíos porque camino cerca de sus procesos cada día.",
  },
];

export default function Diferencial() {
  const containerRef = useScrollReveal();

  return (
    <section className="py-28 bg-carbon text-white relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-carbon via-carbon-light/30 to-carbon" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sage/4 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-light font-semibold text-[10px] tracking-[0.2em] uppercase mb-5" data-reveal>
              Diferencial
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-tight mb-8" data-reveal data-reveal-delay="80">
              No acompaño desde la teoría. Acompaño desde lo vivido.
            </h2>

            <div className="space-y-8">
              {pilares.map((pilar, i) => (
                <div
                  key={pilar.numero}
                  data-reveal
                  data-reveal-delay={String(120 + i * 100)}
                  className="flex gap-5 group"
                >
                  <span className="text-sage-light/40 font-heading text-2xl font-bold shrink-0 mt-0.5 group-hover:text-sage-light transition-colors duration-500">
                    {pilar.numero}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5 text-[1.05rem]">
                      {pilar.titulo}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-sm">
                      {pilar.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block" data-reveal data-reveal-delay="200">
            <div className="p-2 rounded-[2rem] bg-white/[0.04] ring-1 ring-white/[0.08]">
              <div className="w-full aspect-[4/5] rounded-[calc(2rem-0.5rem)] overflow-hidden relative">
                <Image
                  src="/carito_teach.png"
                  alt="Carolina Granados facilitando un taller de estrategia en Emprendiendo Juntas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
