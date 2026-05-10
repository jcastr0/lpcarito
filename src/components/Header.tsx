"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#testimonios", label: "Testimonios" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled
          ? "w-[min(92%,56rem)] bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-carbon/5"
          : "w-[min(92%,64rem)] bg-transparent border border-transparent"
      } rounded-full`}
    >
      <nav className="px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-playfair text-xl font-bold text-carbon tracking-tight">
          Carolina <span className="text-sage">Granados</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-carbon/60 hover:text-sage transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="group relative bg-sage text-white text-sm font-semibold pl-5 pr-4 py-2.5 rounded-full hover:bg-sage-dark active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] inline-flex items-center gap-2"
          >
            Solicitar asesoría
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Menú"
        >
          <span
            className={`absolute block w-5 h-[1.5px] bg-carbon transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] bg-carbon transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] bg-carbon transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-2xl border-t border-carbon/5 px-6 py-8 rounded-b-3xl flex flex-col gap-5 animate-fade-in">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-carbon/70 hover:text-sage transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-sage text-white text-center font-semibold px-5 py-3.5 rounded-full hover:bg-sage-dark active:scale-[0.97] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            Solicitar asesoría
          </a>
        </div>
      )}
    </header>
  );
}
