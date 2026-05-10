"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SobreMi() {
  const containerRef = useScrollReveal();

  return (
    <section id="sobre-mi" className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative" data-reveal>
            <div className="p-2 rounded-[2rem] bg-sage/5 ring-1 ring-sage/10">
              <div className="w-full aspect-[4/5] rounded-[calc(2rem-0.5rem)] overflow-hidden relative">
                <Image
                  src="/carito-desk.png"
                  alt="Leidy Carolina Granados Celis trabajando en su escritorio"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 p-1 rounded-[1.25rem] bg-sage/90 ring-1 ring-sage shadow-lg" data-reveal data-reveal-delay="200">
              <div className="rounded-[calc(1.25rem-0.25rem)] bg-sage px-6 py-5 text-white">
                <p className="font-playfair text-3xl font-bold">+8</p>
                <p className="text-sm text-white/75 mt-0.5">años de experiencia</p>
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <p className="text-sage font-semibold text-[10px] tracking-[0.2em] uppercase" data-reveal>
              Sobre mí
            </p>
            <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold text-carbon leading-tight" data-reveal data-reveal-delay="80">
              Leidy Carolina{" "}
              <span className="text-sage italic">Granados Celis</span>
            </h2>
            <p className="text-lg text-carbon/75 leading-relaxed" data-reveal data-reveal-delay="120">
              Estratega en comunicación, liderazgo y crecimiento de marca para
              emprendedoras y proyectos con propósito.
            </p>
            <p className="text-carbon/70 leading-relaxed" data-reveal data-reveal-delay="160">
              Próxima a graduarse como Técnico Profesional en Producción de
              Contenidos Informativos y estudiante de Comunicación Social.
              Integra experiencia corporativa, tecnológica y emprendedora para
              acompañar procesos de crecimiento con una visión estratégica,
              humana y digital.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2" data-reveal data-reveal-delay="200">
              {[
                "Marketing digital",
                "Liderazgo",
                "Transformación digital",
                "Gestión comercial",
                "Contaduría Pública",
                "Programación",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 text-sm text-carbon/70">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  {skill}
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sage font-semibold pt-2 hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              data-reveal
              data-reveal-delay="240"
            >
              Trabajemos juntas
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
