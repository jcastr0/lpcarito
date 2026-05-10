"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  {
    title: "Emprendedoras",
    description:
      "Que buscan organizar su marca, comunicar con estrategia y crecer con dirección clara.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: "Proyectos con propósito",
    description:
      "Que necesitan estructura, identidad de marca y estrategia de contenido para crecer.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Líderes en formación",
    description:
      "Que desean fortalecer su comunicación, liderazgo y presencia profesional.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function ParaQuienEs() {
  const containerRef = useScrollReveal();

  return (
    <section className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20" data-reveal>
          <p className="text-sage font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">
            Audiencia
          </p>
          <h2 className="font-playfair text-3xl md:text-[2.75rem] font-bold text-carbon leading-tight">
            ¿Para quién es este acompañamiento?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="group p-1.5 rounded-[1.5rem] bg-carbon/[0.02] ring-1 ring-carbon/[0.04] hover:ring-sage/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <div className="p-8 rounded-[calc(1.5rem-0.375rem)] bg-beige-light/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] h-full">
                <div className="w-12 h-12 rounded-xl bg-sage/8 text-sage flex items-center justify-center mb-7 group-hover:bg-sage group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-carbon mb-3">
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
    </section>
  );
}
