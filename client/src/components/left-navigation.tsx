import { useState, useEffect } from "react";
import { Home, MessageCircle, Package, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navigationItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "consultation", icon: MessageCircle, label: "Consultation" },
  { id: "products", icon: Package, label: "Products" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function LeftNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div 
        className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block p-3 rounded-full transition-all duration-300 group relative ${
                  isActive 
                    ? "bg-blue-600 text-white" 
                    : "hover:bg-blue-600 hover:text-white text-slate-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
