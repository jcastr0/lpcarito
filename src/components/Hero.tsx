import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige-light to-sage/8" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-sage/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-gold/6 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2.5 bg-sage/8 text-sage text-xs font-semibold px-4 py-2 rounded-full tracking-[0.15em] uppercase animate-fade-in-up stagger-1">
            <span className="w-1.5 h-1.5 bg-sage rounded-full animate-pulse" />
            Estrategia · Comunicación · Liderazgo
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-carbon leading-[1.1] tracking-tight animate-fade-in-up stagger-2">
            Comunicación estratégica para marcas que quieren crecer{" "}
            <span className="text-sage italic">con dirección</span>
          </h1>

          <p className="text-lg text-carbon/60 leading-relaxed max-w-lg animate-fade-in-up stagger-3" style={{ maxWidth: "65ch" }}>
            Liderazgo, estrategia de contenido y acompañamiento profesional
            desde una visión humana, organizada y auténtica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
            <a
              href="#contacto"
              className="group relative bg-sage text-white font-semibold pl-8 pr-6 py-4 rounded-full hover:bg-sage-dark active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] inline-flex items-center gap-3 text-center justify-center"
            >
              Solicitar asesoría
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </a>
            <a
              href="#servicios"
              className="border border-carbon/15 text-carbon font-semibold px-8 py-4 rounded-full hover:border-sage hover:text-sage active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-center"
            >
              Ver servicios
            </a>
          </div>

          <div className="flex gap-10 pt-2 animate-fade-in-up stagger-5">
            {[
              { num: "+8", label: "años liderando procesos" },
              { num: "+5", label: "años con emprendedoras" },
              { num: "+4", label: "años de emprendimiento" },
            ].map((stat, i) => (
              <div key={i} className="relative">
                {i > 0 && (
                  <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-px h-8 bg-gold/25" />
                )}
                <p className="font-playfair text-3xl font-bold text-sage">{stat.num}</p>
                <p className="text-xs text-carbon/65 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex justify-center animate-scale-in stagger-3">
          <div className="p-2 rounded-[2rem] bg-sage/5 ring-1 ring-sage/10">
            <div className="w-80 h-[26rem] rounded-[calc(2rem-0.5rem)] overflow-hidden relative">
              <Image
                src="/carolina-hero.png"
                alt="Lady Carolina Granados Celis"
                fill
                className="object-cover object-top"
                priority
                sizes="320px"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-gold/20 rounded-[1.5rem] -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-sage/20 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
