import { useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle, AlertTriangle, Clock, Users, Target, Layers, Eye, ArrowRight, ExternalLink, Activity, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import LanguageToggle from "@/components/language-toggle";

export default function InteractiveDashboardPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="text-white font-bold text-xl cursor-pointer">Air Box Teknologi</span>
            </Link>
            <Link href="/">
              <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">{t("backToHome")}</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <LanguageToggle variant="inline" theme="dark" />
      </div>

      <section className="pt-16 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {t("dashboard.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("dashboard.hero.title")}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t("dashboard.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://form.jotform.com/253635394658470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  data-testid="button-run-diagnostic"
                >
                  <Target className="w-5 h-5" />
                  {t("dashboard.hero.cta")}
                </a>
                <a
                  href="https://metabase.airbox.co.id/public/dashboard/79f86bd3-929a-47ae-b1ad-3f0ecd192cf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                  data-testid="button-see-capabilities"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t("dashboard.hero.capabilities")}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-slate-900/90 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                        <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
                        <p className="text-blue-300 text-sm">{t("dashboard.preview.kpis")}</p>
                      </div>
                      <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                        <Activity className="w-8 h-8 text-green-400 mb-2" />
                        <p className="text-green-300 text-sm">{t("dashboard.preview.monitoring")}</p>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="w-5 h-5 text-blue-400" />
                        <span className="text-white text-sm">{t("dashboard.preview.progress")}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              {t("dashboard.problem.title")}
            </h2>
            <p className="text-slate-600 mb-6">{t("dashboard.problem.subtitle")}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("dashboard.problem.item1")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Eye className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("dashboard.problem.item2")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Layers className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("dashboard.problem.item3")}</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">{t("dashboard.problem.item4")}</span>
              </div>
            </div>

            <p className="text-red-700 font-semibold italic text-lg">
              {t("dashboard.problem.warning")}
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
              {t("dashboard.positioning.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              {t("dashboard.positioning.subtitle")}
            </p>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6 max-w-2xl mx-auto mb-6">
              <p className="text-blue-400 text-lg font-semibold">
                {t("dashboard.positioning.principle")}
              </p>
            </div>
            <p className="text-slate-400 text-lg">
              {t("dashboard.positioning.bridge")}
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
              {t("dashboard.solution.title")}
            </h2>
            <p className="text-xl text-slate-600">{t("dashboard.solution.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("dashboard.solution.item1.title")}</h3>
              <p className="text-slate-600">{t("dashboard.solution.item1.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("dashboard.solution.item2.title")}</h3>
              <p className="text-slate-600">{t("dashboard.solution.item2.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("dashboard.solution.item3.title")}</h3>
              <p className="text-slate-600">{t("dashboard.solution.item3.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t("dashboard.solution.item4.title")}</h3>
              <p className="text-slate-600">{t("dashboard.solution.item4.desc")}</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-blue-700 font-semibold text-xl mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("dashboard.solution.highlight")}
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
              {t("dashboard.value.title")}
            </h2>
            <p className="text-xl text-slate-300">{t("dashboard.value.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
              <p className="text-white">{t("dashboard.value.item1")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
              <p className="text-white">{t("dashboard.value.item2")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
              <p className="text-white">{t("dashboard.value.item3")}</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
              <p className="text-white">{t("dashboard.value.item4")}</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-blue-400 font-semibold text-xl mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("dashboard.value.highlight")}
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
              {t("dashboard.activation.title")}
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("dashboard.activation.step1.title")}</h3>
              <p className="text-slate-500 text-sm mb-2">{t("dashboard.activation.step1.time")}</p>
              <p className="text-slate-600 text-sm">{t("dashboard.activation.step1.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("dashboard.activation.step2.title")}</h3>
              <p className="text-slate-500 text-sm mb-2">{t("dashboard.activation.step2.time")}</p>
              <p className="text-slate-600 text-sm">{t("dashboard.activation.step2.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("dashboard.activation.step3.title")}</h3>
              <p className="text-slate-600 text-sm">{t("dashboard.activation.step3.desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("dashboard.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t("dashboard.cta.subtitle")}
            </p>
            <a
              href="https://form.jotform.com/253635394658470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-start-diagnostic"
            >
              {t("dashboard.cta.button")}
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
