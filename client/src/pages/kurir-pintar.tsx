import { useEffect } from "react";
import { motion } from "framer-motion";
import { Truck, CheckCircle, AlertTriangle, Lightbulb, Search, Clock, FileText, Target, Shield, ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import kurirImage from "@assets/KurirPintar_1766991464658.png";

export default function KurirPintarPage() {
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
              <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">← Back to Home</span>
            </Link>
          </div>
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
                Logistics Operations System
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                100% Shipment Traceability. 100% SLA Milestone Transparency.
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Kurir Pintar is an enterprise-grade logistics operations system designed to give companies full visibility and control over every shipment — from assignment to delivery confirmation.
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
                  Run a Delivery Performance Diagnostic
                </a>
                <button
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                  data-testid="button-see-how-it-works"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={kurirImage}
                alt="Kurir Pintar - Logistics Operations System"
                className="max-w-xs w-full drop-shadow-2xl"
              />
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
            <p className="text-slate-400 mb-4">How Kurir Pintar Traceability Works</p>
            <div className="bg-slate-900 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Demo Video Placeholder</p>
              </div>
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
              Logistics Issues Are Rarely Invisible — They Are Usually Untraceable
            </h2>
            <p className="text-slate-600 mb-6">Most logistics operations struggle not because deliveries fail, but because:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Search className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">Shipment status cannot be fully traced end-to-end</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">SLA milestones are not consistently recorded</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">Investigating delays relies on assumptions, not evidence</span>
              </div>
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-red-800">Operational reports cannot withstand client scrutiny</span>
              </div>
            </div>

            <p className="text-red-700 font-semibold italic text-lg">
              Without complete traceability, accountability breaks down.
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
              If You Cannot Trace It, You Cannot Control It
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Kurir Pintar is built on a simple operational principle:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                <p className="text-green-400 text-lg font-semibold">Every shipment must be traceable.</p>
              </div>
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                <p className="text-green-400 text-lg font-semibold">Every SLA milestone must be transparent.</p>
              </div>
            </div>
            <p className="text-slate-400 mt-8 text-lg">
              This is the foundation of scalable and defensible logistics operations.
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
              End-to-End Control Across the Entire Delivery Lifecycle
            </h2>
            <p className="text-xl text-slate-600">Kurir Pintar provides:</p>
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
              <h3 className="font-bold text-slate-800 text-lg mb-2">100% Shipment Traceability</h3>
              <p className="text-slate-600">Every package is recorded, tracked, and linked to a responsible courier</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">100% SLA Milestone Transparency</h3>
              <p className="text-slate-600">Each SLA checkpoint is timestamped, auditable, and reviewable</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">Real-time Operational Visibility</h3>
              <p className="text-slate-600">Operations teams always know what is happening and why</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">Single Source of Truth</h3>
              <p className="text-slate-600">One consistent dataset for operations, management, and clients</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-green-700 font-semibold text-xl mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            No blind spots. No manual reconciliation.
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
              Traceability Is Not a Feature. It Is an Operational Requirement.
            </h2>
            <p className="text-xl text-slate-300">With Kurir Pintar, companies can:</p>
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
              <p className="text-white">Reduce shipment disputes with verifiable data</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">Enforce SLA compliance with objective evidence</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">Identify root causes of delays faster</p>
            </motion.div>
            <motion.div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-white">Build client trust through transparent reporting</p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-green-400 font-semibold text-xl mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your delivery data becomes an asset, not a liability.
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
              We Start by Measuring, Not by Selling Software
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
              <h3 className="text-lg font-bold text-slate-800 mb-2">Delivery Performance Diagnostic</h3>
              <p className="text-slate-500 text-sm mb-2">(5 minutes)</p>
              <p className="text-slate-600 text-sm">Assess traceability gaps and SLA visibility in your current operation</p>
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
              <h3 className="text-lg font-bold text-slate-800 mb-2">Operational Review Call</h3>
              <p className="text-slate-500 text-sm mb-2">(30 minutes)</p>
              <p className="text-slate-600 text-sm">Walk through your diagnostic results with an operations specialist</p>
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
              <h3 className="text-lg font-bold text-slate-800 mb-2">Pilot & Phased Implementation</h3>
              <p className="text-slate-600 text-sm">Deploy Kurir Pintar based on operational impact and readiness</p>
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
              Ready to Achieve 100% Traceability?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Start your journey to complete logistics visibility
            </p>
            <a
              href="https://form.jotform.com/253633720938462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-start-diagnostic"
            >
              Start the Diagnostic
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">© 2024 Air Box Teknologi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
