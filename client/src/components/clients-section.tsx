import { motion } from "framer-motion";
import airBoxLogistics from "@assets/Air Box Logistics_1754476243899.png";
import airBoxPersonalia from "@assets/Air Box Personalia_1754476243901.png";
import beenshine from "@assets/Beenshine_1754476243901.png";
import manggalaSemesta from "@assets/Manggala Semesta Investama_1754476243901.png";
import mitraAngkasa from "@assets/Mitra Angkasa Raya_1754476243901.png";
import mitraEkspedisi from "@assets/Mitra Ekspedisi Jawa_1754476243902.png";
import mitraSamudra from "@assets/Mitra Samudra Tangguh_1754476243902.png";

const clients = [
  {
    name: "Air Box Logistics",
    logo: airBoxLogistics,
  },
  {
    name: "Air Box Personalia", 
    logo: airBoxPersonalia,
  },
  {
    name: "Beenshine",
    logo: beenshine,
  },
  {
    name: "Manggala Semesta Investama",
    logo: manggalaSemesta,
  },
  {
    name: "Mitra Angkasa Raya",
    logo: mitraAngkasa,
  },
  {
    name: "Mitra Ekspedisi Jawa",
    logo: mitraEkspedisi,
  },
  {
    name: "Mitra Samudra Tangguh",
    logo: mitraSamudra,
  },
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
                <div key={`first-${index}`} className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border-2 border-blue-100 p-5">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border-2 border-blue-100 p-5">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
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