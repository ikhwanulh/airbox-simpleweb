import LeftNavigation from "@/components/left-navigation";
import HeroSection from "@/components/hero-section";
import ConsultationSection from "@/components/consultation-section";
import ProductsSection from "@/components/products-section";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <LeftNavigation />
      <HeroSection />
      <ConsultationSection />
      <ProductsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
