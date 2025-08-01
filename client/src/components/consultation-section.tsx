import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import AIchatbot from "@/components/ai-chatbot";

export default function ConsultationSection() {
  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Strategic Consultation</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Approach</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We begin by helping organizations clarify their strategic objectives, design metric trees, and assess their data pipeline readiness — before we offer any digital products. This ensures our solutions are relevant, effective, and tailored to your business context.
                </p>
              </div>
              
              <div className="bg-blue-600 text-white p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Bot className="w-6 h-6 mr-3" />
                  Chat with our smart consultant here:
                </h4>
                <p className="text-blue-200">Get instant insights and recommendations for your digital transformation journey.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AIchatbot />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
