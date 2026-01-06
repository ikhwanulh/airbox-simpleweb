import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Lightbulb, Search, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import jurnalImage from "@assets/JurnalPintar_1766991464656.png";

export default function JurnalPintarPage() {
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
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {t("jurnal.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("jurnal.hero.title")}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t("jurnal.hero.description")}
              </p>
              <a
                href="https://form.jotform.com/253629031154048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                data-testid="button-check-trust-score"
              >
                <Shield className="w-5 h-5" />
                {t("jurnal.hero.cta")}
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={jurnalImage}
                  alt="Jurnal Pintar - Smart Accounting System"
                  className="max-w-[200px] w-full"
                />
              </div>
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
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t("jurnal.problem.title")}
              </h2>
              <p className="text-slate-600 mb-6">{t("jurnal.problem.subtitle")}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                  <Search className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-red-800">{t("jurnal.problem.item1")}</span>
                </div>
                <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-red-800">{t("jurnal.problem.item2")}</span>
                </div>
                <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-red-800">{t("jurnal.problem.item3")}</span>
                </div>
              </div>

              <p className="text-red-700 font-semibold italic">
                {t("jurnal.problem.warning")}
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
                {t("jurnal.solution.title")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("jurnal.solution.item1.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("jurnal.solution.item1.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("jurnal.solution.item2.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("jurnal.solution.item2.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("jurnal.solution.item3.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("jurnal.solution.item3.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{t("jurnal.solution.item4.title")}</h3>
                    <p className="text-slate-600 text-sm">{t("jurnal.solution.item4.desc")}</p>
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
              {t("jurnal.value.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-2">
              {t("jurnal.value.subtitle")}
            </p>
            <p className="text-2xl text-orange-400 font-semibold">
              {t("jurnal.value.highlight")}
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
              {t("jurnal.activation.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("jurnal.activation.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("jurnal.activation.step1.title")}</h3>
              <p className="text-slate-600 text-sm">{t("jurnal.activation.step1.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("jurnal.activation.step2.title")}</h3>
              <p className="text-slate-600 text-sm">{t("jurnal.activation.step2.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("jurnal.activation.step3.title")}</h3>
              <p className="text-slate-600 text-sm">{t("jurnal.activation.step3.desc")}</p>
            </motion.div>
          </div>
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
              className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-300 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("jurnal.pricing.bookkeeping.name")}</h3>
              <p className="text-orange-600 font-medium mb-4 italic">"{t("jurnal.pricing.bookkeeping.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold text-slate-800">{t("jurnal.pricing.bookkeeping.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-600 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Customer & Vendor Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Invoicing & Billing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Product / Service Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Bank & cash account management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Payment In/Out</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Journal Entry</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Balance Sheet Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Profit & Loss Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Cashflow Statement Report</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.platform")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.bookkeeping.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.bookkeeping.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.bookkeeping.service")}</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-400 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("jurnal.pricing.trusted.name")}</h3>
              <p className="text-orange-600 font-medium mb-4 italic">"{t("jurnal.pricing.trusted.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-slate-600">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold text-slate-800">{t("jurnal.pricing.trusted.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-600 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Customer & Vendor Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Invoicing & Billing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Product / Service Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Bank & cash account management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Payment In/Out with Bank Transaction History</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Journal Entry</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Balance Sheet Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Profit & Loss Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Cashflow Statement Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />External Integration with POS</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Trial Balance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />General Ledger Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Project / Branch Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Asset Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Purchasing & Vendor Bidding</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Audit Trail</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />Dynamic & Personalized Management Report</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.platform")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.trusted.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.trusted.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium text-slate-800">{t("jurnal.pricing.trusted.service")}</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">{t("jurnal.pricing.investor.name")}</h3>
              <p className="text-orange-200 font-medium mb-4 italic">"{t("jurnal.pricing.investor.jargon")}"</p>
              <div className="mb-6">
                <p className="text-sm text-orange-200">{t("pricing.usageFee")}</p>
                <p className="text-xl font-bold">{t("jurnal.pricing.investor.usage")}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-orange-200 mb-2">{t("pricing.features")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Customer & Vendor Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Invoicing & Billing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Product / Service Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Bank & cash account management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Payment In/Out with Bank Transaction History</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Journal Entry</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Balance Sheet Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Profit & Loss Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Cashflow Statement Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />External Integration with POS</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Trial Balance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />General Ledger Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Project / Branch Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Asset Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Purchasing & Vendor Bidding</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Audit Trail</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Dynamic & Personalized Management Report</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Warehouse Management</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Manufacturing Module</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Investor Grade Reporting</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />AI-Assisted General Ledger Review</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />IT Priority Support</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />Monthly Accountant Consultation</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm text-orange-200">{t("pricing.platform")}</p>
                <p className="text-sm font-medium">{t("jurnal.pricing.investor.platform")}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-orange-200">{t("pricing.addOnCost")}</p>
                <p className="text-sm font-medium">{t("jurnal.pricing.investor.addon")}</p>
              </div>
              <div>
                <p className="text-sm text-orange-200">{t("pricing.additionalService")}</p>
                <p className="text-sm font-medium">{t("jurnal.pricing.investor.service")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("jurnal.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t("jurnal.cta.subtitle")}
            </p>
            <a
              href="https://form.jotform.com/253629031154048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-start-trust-assessment"
            >
              {t("jurnal.cta.button")}
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
