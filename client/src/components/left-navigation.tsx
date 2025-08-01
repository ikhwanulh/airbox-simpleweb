import { useState, useEffect } from "react";
import { Home, MessageCircle, Package, Users, Mail, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "consultation", icon: MessageCircle, label: "Consultation" },
  { id: "products", icon: Package, label: "Products" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function LeftNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded(false); // Collapse after navigation
  };

  return (
    <nav className="fixed left-4 top-4 z-50">
      <motion.div 
        className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        {/* Menu Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-5 h-5" />
        </motion.button>

        {/* Navigation Items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 pt-14 pb-2"
            >
              <div className="space-y-1 px-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-8 h-8 rounded-full transition-all duration-300 group relative ${
                        isActive 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-blue-600 hover:text-white text-slate-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={item.label}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: navigationItems.indexOf(item) * 0.05 }}
                    >
                      <Icon className="w-4 h-4 mx-auto" />
                      
                      {/* Tooltip */}
                      <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}