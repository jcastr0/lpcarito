"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const servicios = [
  {
    num: "01",
    title: "Talleres Formativos",
    description:
      "Espacios enfocados en liderazgo, comunicación, crecimiento de marca y estrategia digital para emprendedoras.",
    features: ["Liderazgo y comunicación", "Crecimiento de marca", "Estrategia digital", "Networking"],
  },
  {
    num: "02",
    title: "Asesorías Estratégicas",
    description:
      "Procesos personalizados para organizar proyectos, fortalecer identidad de marca y tomar decisiones con claridad.",
    features: ["Diagnóstico de marca", "Plan estratégico", "Identidad de marca", "Acompañamiento 1:1"],
  },
  {
    num: "03",
    title: "Estrategia de Contenido",
    description:
      "Creación de contenido con propósito, storytelling y posicionamiento digital.",
    features: ["Storytelling", "Narrativa digital", "Posicionamiento", "Contenido con propósito"],
  },
];

export default function Servicios() {
  const containerRef = useScrollReveal();

  return (
    <section id="servicios" className="py-28 bg-beige" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20" data-reveal>
          <p className="text-gold-dark font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
            Servicios
          </p>
          <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-carbon mb-5 leading-tight max-w-xl">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-carbon/70 max-w-xl text-[0.95rem]">
            Servicios diseñados para emprendedoras y proyectos que quieren
            crecer con estrategia, claridad y propósito.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-carbon/8">
          {servicios.map((servicio, i) => (
            <div
              key={servicio.title}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="group grid md:grid-cols-[4rem_1fr_1fr] gap-6 md:gap-10 py-10 first:pt-0 last:pb-0 items-start"
            >
              <span className="font-heading text-3xl font-bold text-sage/30 group-hover:text-sage transition-colors duration-500">
                {servicio.num}
              </span>

              <div>
                <h3 className="font-heading text-2xl font-bold text-carbon mb-3">
                  {servicio.title}
                </h3>
                <p className="text-carbon/70 leading-relaxed text-[0.95rem]">
                  {servicio.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <ul className="space-y-2.5">
                  {servicio.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-carbon/75">
                      <span className="w-1 h-1 rounded-full bg-sage shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center text-sage font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] mt-2"
                >
                  Consultar este servicio
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
