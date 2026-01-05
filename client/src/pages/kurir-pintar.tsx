import { useEffect } from "react";
import { motion } from "framer-motion";
import { Truck, CheckCircle, AlertTriangle, Lightbulb, Search, Clock, FileText, Target, Shield, ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import kurirImage from "@assets/KurirPintar_1766991464658.png";
import kurirTraceabilityVideo from "@assets/kurirpintar_1767149142418.mp4";

export default function KurirPintarPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">{t("backToHome")}</span>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {t("kurir.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("kurir.hero.title")}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t("kurir.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://form.jotform.com/253633720938462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  data-testid="button-run-diagnostic"
                >
                  <Target className="w-5 h-5" />
                  {t("kurir.hero.cta")}
                </a>
                <button
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                  data-testid="button-see-how-it-works"
                >
                  <Play className="w-5 h-5" />
                  {t("kurir.hero.seeHow")}
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={kurirImage}
                  alt="Kurir Pintar - Logistics Operations System"
                  className="max-w-xs w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="bg-slate-700/50 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 mb-4">{t("kurir.video.title")}</p>
            <div className="rounded-xl overflow-hidden">
              <video
                src={kurirTraceabilityVideo}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {t("kurir.problem.title")}
            </h2>
            <p className="text-slate-600 mb-6">{t("kurir.problem.subtitle")}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Search className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("kurir.problem.item1")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("kurir.problem.item2")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("kurir.problem.item3")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("kurir.problem.item4")}</span>
              </div>
            </div>

            <p className="text-red-700 font-semibold italic text-lg">
              {t("kurir.problem.warning")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("kurir.positioning.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t("kurir.positioning.subtitle")}
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                <p className="text-green-400 text-lg font-semibold">{t("kurir.positioning.principle1")}</p>
              </div>
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                <p className="text-green-400 text-lg font-semibold">{t("kurir.positioning.principle2")}</p>
              </div>
            </div>
            <p className="text-slate-400 mt-8 text-lg">
              {t("kurir.positioning.foundation")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t("kurir.solution.title")}
            </h2>
            <p className="text-xl text-slate-600">{t("kurir.solution.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("kurir.solution.item1.title")}</h3>
              <p className="text-slate-600">{t("kurir.solution.item1.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("kurir.solution.item2.title")}</h3>
              <p className="text-slate-600">{t("kurir.solution.item2.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("kurir.solution.item3.title")}</h3>
              <p className="text-slate-600">{t("kurir.solution.item3.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("kurir.solution.item4.title")}</h3>
              <p className="text-slate-600">{t("kurir.solution.item4.desc")}</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-green-700 font-semibold text-xl mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("kurir.solution.highlight")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("kurir.value.title")}
            </h2>
            <p className="text-xl text-slate-300">{t("kurir.value.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">{t("kurir.value.item1")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">{t("kurir.value.item2")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">{t("kurir.value.item3")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">{t("kurir.value.item4")}</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-green-400 font-semibold text-xl mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("kurir.value.highlight")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t("kurir.activation.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("kurir.activation.step1.title")}</h3>
              <p className="text-slate-500 text-sm mb-2">{t("kurir.activation.step1.time")}</p>
              <p className="text-slate-600 text-sm">{t("kurir.activation.step1.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("kurir.activation.step2.title")}</h3>
              <p className="text-slate-500 text-sm mb-2">{t("kurir.activation.step2.time")}</p>
              <p className="text-slate-600 text-sm">{t("kurir.activation.step2.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("kurir.activation.step3.title")}</h3>
              <p className="text-slate-600 text-sm">{t("kurir.activation.step3.desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("kurir.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t("kurir.cta.subtitle")}
            </p>
            <a
              href="https://form.jotform.com/253633720938462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-start-diagnostic"
            >
              {t("kurir.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">{t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
}
