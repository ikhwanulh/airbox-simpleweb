import { motion } from "framer-motion";

const clients = [
  "Mitra Angkasa Raya",
  "Mitra Ekspedisi Jawa", 
  "Air Box Logistik",
  "Air Box Personalia",
  "Chaya Hantara Nusantara",
  "Solusi Logistik Indonesia",
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Trusted Clients</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">Partnering with industry leaders to drive digital transformation.</p>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden bg-slate-50 rounded-2xl py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-12 client-scroll">
              {/* First set of clients */}
              {clients.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-200">
                  <span className="text-slate-600 font-semibold text-sm text-center px-4">
                    {client}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-200">
                  <span className="text-slate-600 font-semibold text-sm text-center px-4">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 text-lg">
              Join hundreds of companies that trust AirBox for their digital transformation journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}