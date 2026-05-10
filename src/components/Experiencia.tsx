"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiencias = [
  {
    periodo: "+8 años",
    titulo: "Gestión Humana y Organizacional",
    descripcion: "Liderando procesos en el área de gestión humana, administración y dirección estratégica.",
  },
  {
    periodo: "+5 años",
    titulo: "Emprendiendo Juntas",
    descripcion: "Acompañando emprendedoras y construyendo comunidad a través de talleres, bootcamps y networking.",
  },
  {
    periodo: "+4 años",
    titulo: "Emprendimiento Propio",
    descripcion: "Liderando su propio emprendimiento de calzado online con gestión comercial y estrategia digital.",
  },
];

const formaciones = [
  "Comunicación Social",
  "Producción de Contenidos Informativos",
  "Contaduría Pública",
  "Gestión Contable",
  "Programación y Análisis de Sistemas",
  "Marketing Digital",
  "Transformación Digital",
  "Gestión Comercial",
  "Liderazgo y Gestión Emocional",
];

export default function Experiencia() {
  const containerRef = useScrollReveal();

  return (
    <section id="experiencia" className="py-32 bg-beige-light" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20" data-reveal>
          <p className="text-gold font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
            Trayectoria
          </p>
          <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold text-carbon leading-tight">
            Experiencia y Formación
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h3 className="font-playfair text-2xl font-bold text-carbon flex items-center gap-4" data-reveal>
              <span className="w-12 h-[1px] bg-sage" />
              Experiencia
            </h3>
            <div className="space-y-8">
              {experiencias.map((exp, i) => (
                <div
                  key={exp.titulo}
                  data-reveal
                  data-reveal-delay={String(i * 100)}
                  className="relative pl-8 border-l border-sage/25 hover:border-sage transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-sage ring-4 ring-beige-light" />
                  <p className="text-sage font-semibold text-xs tracking-wide mb-1.5">{exp.periodo}</p>
                  <h4 className="font-playfair text-lg font-bold text-carbon mb-2">
                    {exp.titulo}
                  </h4>
                  <p className="text-carbon/50 text-sm leading-relaxed">
                    {exp.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="font-playfair text-2xl font-bold text-carbon flex items-center gap-4" data-reveal>
              <span className="w-12 h-[1px] bg-gold" />
              Formación
            </h3>
            <div className="flex flex-wrap gap-2.5" data-reveal data-reveal-delay="100">
              {formaciones.map((formacion) => (
                <span
                  key={formacion}
                  className="bg-white ring-1 ring-carbon/8 text-carbon/60 text-sm px-4 py-2.5 rounded-full hover:ring-sage hover:text-sage transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
                >
                  {formacion}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
