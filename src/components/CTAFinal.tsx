"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTAFinal() {
  const containerRef = useScrollReveal();

  return (
    <section id="contacto" className="py-32 bg-sage relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-sage via-sage-dark/80 to-sage" />
      <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] bg-white/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-white/4 rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center space-y-10">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight" data-reveal>
          ¿Lista para crecer con estrategia y dirección?
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed" data-reveal data-reveal-delay="80">
          Da el primer paso hacia una marca sólida, una comunicación clara y un
          crecimiento con propósito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" data-reveal data-reveal-delay="160">
          <a
            href="https://wa.me/573013528537?text=Hola%20Carolina,%20me%20interesa%20una%20asesor%C3%ADa"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-sage font-bold pl-7 pr-5 py-4 rounded-full hover:bg-beige active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] inline-flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Escribir por WhatsApp
            <span className="w-7 h-7 rounded-full bg-sage/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
              <svg className="w-3.5 h-3.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </a>
          <a
            href="mailto:contacto@carolinagranados.com"
            className="bg-transparent border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  );
}
