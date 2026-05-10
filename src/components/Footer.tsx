export default function Footer() {
  return (
    <footer className="bg-carbon text-white/60 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading text-xl font-bold text-white mb-4">
              Carolina <span className="text-sage-light">Granados</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Estratega en comunicación, liderazgo y crecimiento de marca para
              emprendedoras y proyectos con propósito.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white text-xs tracking-[0.15em] uppercase mb-4">Navegación</p>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#sobre-mi", label: "Sobre mí" },
                { href: "#experiencia", label: "Experiencia" },
                { href: "#testimonios", label: "Testimonios" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-sage-light transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-xs tracking-[0.15em] uppercase mb-4">Ecosistema</p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-sage-light">El Vlog de Carito</span>
                <span className="text-white/45"> (Marca principal)</span>
              </li>
              <li>
                <a href="https://emprendiendojuntas.com.co" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-gold transition-colors duration-300">Emprendiendo Juntas</a>
                <span className="text-white/45"> (Comunidad)</span>
              </li>
              <li>
                <span className="text-white/55">Susurros</span>
                <span className="text-white/45"> (Bienestar emocional)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Leidy Carolina Granados Celis. Todos los
            derechos reservados.
          </p>
          <a
            href="https://www.instagram.com/elvlogdecarito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/6 ring-1 ring-white/8 flex items-center justify-center hover:bg-sage hover:ring-sage transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
