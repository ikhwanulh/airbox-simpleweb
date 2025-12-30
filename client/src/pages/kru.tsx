import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, FileText, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import kruImage from "@assets/KRU_1766991464658.png";

export default function KruPage() {
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
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Workforce Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                One Admin for Thousands of Employees. Built for Real Scale.
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                KRU Pintar is a workforce management system designed for manpower companies, BPOs, and HR outsourcing firms to manage thousands of employees without increasing administrative overhead.
              </p>
              <a
                href="https://form.jotform.com/253621677588067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                data-testid="button-calculate-leverage"
              >
                <FileText className="w-5 h-5" />
                Calculate Your Admin Leverage
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
                Scaling Workforce Should Not Mean Scaling Administration
              </h2>
              <p className="text-slate-600 mb-6">Many organizations experience:</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">Growing admin teams as headcount increases</span>
                </div>
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">Slower payroll cycles</span>
                </div>
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-lg">
                  <FileText className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-800">Increasing payroll disputes</span>
                </div>
              </div>

              <p className="text-amber-700 font-semibold italic">
                This linear growth model is not scalable and erodes margins.
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
                KRU Pintar as a Workforce Operating System
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Integrated attendance and payroll</h3>
                    <p className="text-slate-600 text-sm">Seamlessly connect time tracking with compensation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Strong data controls</h3>
                    <p className="text-slate-600 text-sm">Ensure accuracy and compliance at every level</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Productivity measurement linked to billing</h3>
                    <p className="text-slate-600 text-sm">Connect workforce output directly to revenue</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Infrastructure designed for large-scale operations</h3>
                    <p className="text-slate-600 text-sm">Handle thousands of employees without breaking a sweat</p>
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
              If Administration Grows Linearly, Your Operations Are Not Scalable
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              KRU Pintar enables operational leverage, allowing:
            </p>
            <p className="text-2xl text-purple-400 font-semibold">
              One administrator to confidently manage thousands of employees.
            </p>
          </motion.div>
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
              Ready to Scale Your Workforce Management?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover how KRU Pintar can transform your operations
            </p>
            <a
              href="https://form.jotform.com/253621677588067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-calculate-leverage-bottom"
            >
              <FileText className="w-5 h-5" />
              Calculate Your Admin Leverage
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
