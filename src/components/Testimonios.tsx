"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonios = [
  {
    nombre: "María López",
    rol: "Emprendedora",
    texto:
      "Carolina me ayudó a organizar mi marca desde cero. Su visión estratégica y su cercanía hacen toda la diferencia.",
  },
  {
    nombre: "Andrea Torres",
    rol: "Fundadora de proyecto social",
    texto:
      "Gracias a su acompañamiento, logré claridad en mi comunicación y mi proyecto creció de forma sostenible.",
  },
  {
    nombre: "Laura Méndez",
    rol: "Líder comunitaria",
    texto:
      "Los talleres de Emprendiendo Juntas transformaron mi forma de liderar. Carolina inspira con su ejemplo.",
  },
];

export default function Testimonios() {
  const containerRef = useScrollReveal();

  return (
    <section id="testimonios" className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20" data-reveal>
          <p className="text-sage font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
            Testimonios
          </p>
          <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold text-carbon leading-tight">
            Lo que dicen quienes han trabajado conmigo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((testimonio, i) => (
            <div
              key={testimonio.nombre}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="p-1.5 rounded-[1.5rem] bg-carbon/[0.02] ring-1 ring-carbon/[0.04]"
            >
              <div className="bg-beige-light/80 rounded-[calc(1.5rem-0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-sage/15 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-carbon/80 leading-relaxed mb-8 italic flex-1 text-[0.95rem]">
                  &ldquo;{testimonio.texto}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/15 ring-1 ring-sage/15 flex items-center justify-center">
                    <span className="text-sage-dark font-bold text-xs">
                      {testimonio.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-carbon text-sm">
                      {testimonio.nombre}
                    </p>
                    <p className="text-carbon/55 text-xs">{testimonio.rol}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-carbon/30 text-xs mt-10">
          * Testimonios de ejemplo — reemplazar con testimonios reales.
        </p>
      </div>
    </section>
  );
}
