import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 p-1 flex">
        <button
          onClick={() => setLanguage("EN")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            language === "EN"
              ? "bg-blue-600 text-white"
              : "text-slate-600 hover:text-blue-600"
          }`}
          data-testid="button-language-en"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("ID")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            language === "ID"
              ? "bg-blue-600 text-white"
              : "text-slate-600 hover:text-blue-600"
          }`}
          data-testid="button-language-id"
        >
          ID
        </button>
      </div>
    </motion.div>
  );
}
