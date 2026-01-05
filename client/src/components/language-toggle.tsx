import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

interface LanguageToggleProps {
  variant?: "fixed" | "inline";
  theme?: "light" | "dark";
}

export default function LanguageToggle({ variant = "fixed", theme = "light" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "inline") {
    const bgClass = theme === "dark" 
      ? "bg-slate-800/50 border-b border-slate-700" 
      : "bg-slate-50 border-b border-slate-200";
    const buttonBgClass = theme === "dark"
      ? "bg-slate-700 border-slate-600"
      : "bg-white border-slate-200";
    const inactiveTextClass = theme === "dark"
      ? "text-slate-300 hover:text-blue-400"
      : "text-slate-600 hover:text-blue-600";

    return (
      <div className={`flex justify-end px-6 py-2 ${bgClass}`}>
        <div className={`rounded-full shadow-sm border p-1 flex ${buttonBgClass}`}>
          <button
            onClick={() => setLanguage("EN")}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === "EN"
                ? "bg-blue-600 text-white"
                : inactiveTextClass
            }`}
            data-testid="button-language-en"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ID")}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === "ID"
                ? "bg-blue-600 text-white"
                : inactiveTextClass
            }`}
            data-testid="button-language-id"
          >
            ID
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed top-4 right-4 z-[100]"
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
