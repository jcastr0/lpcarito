"use client";

import { useState } from "react";
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
  const [active, setActive] = useState(0);
  const testimonio = testimonios[active];

  return (
    <section id="testimonios" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div data-reveal>
            <p className="text-sage font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
              Testimonios
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-carbon leading-tight">
              Lo que dicen quienes han trabajado conmigo
            </h2>
          </div>

          <div data-reveal data-reveal-delay="100">
            <svg
              className="w-10 h-10 text-sage/20 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>

            <p className="text-carbon/80 text-xl leading-relaxed mb-8 min-h-[5rem]">
              &ldquo;{testimonio.texto}&rdquo;
            </p>

            <div className="flex items-center justify-between">
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

              <div className="flex gap-2">
                {testimonios.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonio ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-sage scale-110"
                        : "bg-carbon/15 hover:bg-carbon/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
