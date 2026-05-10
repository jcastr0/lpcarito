"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const servicios = [
  {
    title: "Talleres Formativos",
    description:
      "Espacios enfocados en liderazgo, comunicación, crecimiento de marca y estrategia digital para emprendedoras.",
    features: ["Liderazgo y comunicación", "Crecimiento de marca", "Estrategia digital", "Networking"],
    accentClass: "bg-sage",
  },
  {
    title: "Asesorías Estratégicas",
    description:
      "Procesos personalizados para organizar proyectos, fortalecer identidad de marca y tomar decisiones con claridad.",
    features: ["Diagnóstico de marca", "Plan estratégico", "Identidad de marca", "Acompañamiento 1:1"],
    accentClass: "bg-gold",
  },
  {
    title: "Estrategia de Contenido",
    description:
      "Creación de contenido con propósito, storytelling y posicionamiento digital.",
    features: ["Storytelling", "Narrativa digital", "Posicionamiento", "Contenido con propósito"],
    accentClass: "bg-teal",
  },
];

export default function Servicios() {
  const containerRef = useScrollReveal();

  return (
    <section id="servicios" className="py-32 bg-beige" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20" data-reveal>
          <p className="text-gold font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
            Servicios
          </p>
          <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold text-carbon mb-5 leading-tight">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-carbon/70 max-w-2xl mx-auto text-[0.95rem]">
            Servicios diseñados para emprendedoras y proyectos que quieren
            crecer con estrategia, claridad y propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => (
            <div
              key={servicio.title}
              data-reveal
              data-reveal-delay={String(i * 120)}
              className="group p-1.5 rounded-[1.5rem] bg-carbon/[0.02] ring-1 ring-carbon/[0.04] hover:ring-sage/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <div className="relative bg-white rounded-[calc(1.5rem-0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] h-full flex flex-col">
                <div className={`absolute top-0 left-10 right-10 h-[2px] rounded-b-full ${servicio.accentClass}`} />

                <h3 className="font-playfair text-2xl font-bold text-carbon mt-4 mb-4">
                  {servicio.title}
                </h3>
                <p className="text-carbon/70 leading-relaxed mb-8 text-[0.95rem]">
                  {servicio.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {servicio.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-carbon/75">
                      <span className="w-1 h-1 rounded-full bg-sage shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="inline-flex items-center text-sage font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  Más información
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
