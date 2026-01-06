import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, FileText, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import kruImage from "@assets/KRU_1766991464658.png";

export default function KruPage() {
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
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {t("kru.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("kru.hero.title")}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t("kru.hero.description")}
              </p>
              <a
                href="https://form.jotform.com/253621677588067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                data-testid="button-calculate-leverage"
              >
                <FileText className="w-5 h-5" />
                {t("kru.hero.cta")}
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={kruImage}
                alt="KRU - Workforce Management System"
                className="max-w-sm w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t("kru.problem.title")}
              </h2>
              <p className="text-slate-600 mb-6">{t("kru.problem.subtitle")}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">{t("kru.problem.item1")}</span>
                </div>
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">{t("kru.problem.item2")}</span>
                </div>
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <FileText className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">{t("kru.problem.item3")}</span>
                </div>
              </div>

              <p className="text-amber-700 font-semibold italic">
                {t("kru.problem.warning")}
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {t("kru.solution.title")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("kru.solution.item1.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("kru.solution.item1.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("kru.solution.item2.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("kru.solution.item2.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("kru.solution.item3.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("kru.solution.item3.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("kru.solution.item4.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("kru.solution.item4.desc")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              {t("kru.value.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              {t("kru.value.subtitle")}
            </p>
            <p className="text-2xl text-purple-400 font-semibold">
              {t("kru.value.highlight")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t("pricing.title")}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-300 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("kru.pricing.basic.name")}</h3>
              <p className="text-purple-600 font-medium mb-4 italic">"{t("kru.pricing.basic.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold text-slate-800">{t("kru.pricing.basic.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.baseFee")}</p>
                <p className="text-lg font-semibold text-slate-800">{t("kru.pricing.basic.base")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-600 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Employee Master Data</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Presence, Leave, Overtime</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Presence Fraud Prevention</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Basic Reporting</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />1 rule payroll & payslip</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.platform")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.basic.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.basic.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.basic.service")}</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-400 shadow-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("kru.pricing.scaleup.name")}</h3>
              <p className="text-purple-600 font-medium mb-4 italic">"{t("kru.pricing.scaleup.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold text-slate-800">{t("kru.pricing.scaleup.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.baseFee")}</p>
                <p className="text-lg font-semibold text-slate-800">{t("kru.pricing.scaleup.base")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-600 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Employee Master Data</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Presence, Leave, Overtime</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Presence Fraud Prevention</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Basic Reporting</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Payroll & payslip automation rules</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Employee shift schedule</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Productivity & operational insight dashboard</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Recruitment Platform</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.platform")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.scaleup.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.scaleup.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium text-slate-800">{t("kru.pricing.scaleup.service")}</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">{t("kru.pricing.enterprise.name")}</h3>
              <p className="text-purple-200 font-medium mb-4 italic">"{t("kru.pricing.enterprise.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-purple-200">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold">{t("kru.pricing.enterprise.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-purple-200">{t("pricing.baseFee")}</p>
                <p className="text-lg font-semibold">{t("kru.pricing.enterprise.base")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-purple-200 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Employee Master Data</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Presence, Leave, Overtime</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Presence Fraud Prevention</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Basic Reporting</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Payroll & payslip automation rules</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Employee shift schedule</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Productivity & operational insight dashboard</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Recruitment Platform</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />e-contract platform</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Personalized dashboard</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />API & System integration</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />Priority Support</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-purple-200">{t("pricing.platform")}</p>
                <p className="text-sm font-medium">{t("kru.pricing.enterprise.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-purple-200">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium">{t("kru.pricing.enterprise.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-purple-200">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium">{t("kru.pricing.enterprise.service")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("kru.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t("kru.cta.subtitle")}
            </p>
            <a
              href="https://form.jotform.com/253621677588067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-calculate-leverage-bottom"
            >
              <FileText className="w-5 h-5" />
              {t("kru.hero.cta")}
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
