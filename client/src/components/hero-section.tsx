import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import airboxLogo from "@assets/airbox white_1754038254518.png";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <motion.div 
        className="absolute top-20 left-20 w-20 h-20 border-2 border-white/30 rounded-lg"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-16 h-16 border-2 border-white/20 rounded-full"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-lg"
        animate={{ y: [-10, 30, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img src={airboxLogo} alt="Air Box Teknologi" className="h-20 md:h-28 object-contain" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Air Box <span className="text-blue-300">Teknologi</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("hero.tagline")}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => scrollToSection("consultation")}
              className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              size="lg"
              data-testid="button-start-consultation"
            >
              {t("hero.startConsultation")}
            </Button>
            <Button 
              onClick={() => scrollToSection("products")}
              variant="outline"
              className="border-2 border-white text-white bg-transparent px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              size="lg"
              data-testid="button-view-products"
            >
              {t("hero.viewProducts")}
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
