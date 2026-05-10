import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ParaQuienEs from "@/components/ParaQuienEs";
import Servicios from "@/components/Servicios";
import Diferencial from "@/components/Diferencial";
import SobreMi from "@/components/SobreMi";
import Experiencia from "@/components/Experiencia";
import Testimonios from "@/components/Testimonios";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ParaQuienEs />
        <Servicios />
        <Diferencial />
        <SobreMi />
        <Experiencia />
        <Testimonios />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
