import { motion } from "framer-motion";
import { BarChart3, Truck, Users, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import dashboardVideo from "@assets/dashboard_1767145061416.mp4";
import kurirPintarVideo from "@assets/kurirpintar_1767146203176.mp4";
import kruVideo from "@assets/KRU_1767147487073.mp4";
import jurnalVideo from "@assets/jurnal_1767147487071.mp4";

const colorVariants = {
  blue: {
    gradient: "from-blue-600 to-blue-700",
    icon: "bg-blue-100 text-blue-600",
    tags: "bg-blue-100 text-blue-600",
  },
  green: {
    gradient: "from-green-600 to-green-700",
    icon: "bg-green-100 text-green-600",
    tags: "bg-green-100 text-green-600",
  },
  purple: {
    gradient: "from-purple-600 to-purple-700",
    icon: "bg-purple-100 text-purple-600",
    tags: "bg-purple-100 text-purple-600",
  },
  orange: {
    gradient: "from-orange-600 to-orange-700",
    icon: "bg-orange-100 text-orange-600",
    tags: "bg-orange-100 text-orange-600",
  },
};

export default function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      titleKey: "products.dashboard.title",
      descriptionKey: "products.dashboard.description",
      icon: BarChart3,
      color: "blue",
      tagKeys: ["products.dashboard.tag1", "products.dashboard.tag2", "products.dashboard.tag3"],
      link: "/interactive-dashboard",
    },
    {
      id: 2,
      titleKey: "products.kurir.title",
      descriptionKey: "products.kurir.description",
      icon: Truck,
      color: "green",
      tagKeys: ["products.kurir.tag1", "products.kurir.tag2", "products.kurir.tag3"],
      link: "/kurir-pintar",
    },
    {
      id: 3,
      titleKey: "products.kru.title",
      descriptionKey: "products.kru.description",
      icon: Users,
      color: "purple",
      tagKeys: ["products.kru.tag1", "products.kru.tag2", "products.kru.tag3"],
      link: "/kru",
    },
    {
      id: 4,
      titleKey: "products.jurnal.title",
      descriptionKey: "products.jurnal.description",
      icon: Calculator,
      color: "orange",
      tagKeys: ["products.jurnal.tag1", "products.jurnal.tag2", "products.jurnal.tag3"],
      link: "/jurnal-pintar",
    },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{t("products.title")}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("products.subtitle")}
            </p>
          </motion.div>
          
          <div className="grid gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const colors = colorVariants[product.color as keyof typeof colorVariants];
              const isEven = index % 2 === 0;
              
              const cardContent = (
                <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className={`${colors.icon} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(product.titleKey)}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {t(product.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.tagKeys.map((tagKey, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`${colors.tags} px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {t(tagKey)}
                        </span>
                      ))}
                    </div>
                    {product.link && (
                      <div className="mt-4">
                        <span className={`${product.color === 'orange' ? 'text-orange-600' : product.color === 'green' ? 'text-green-600' : product.color === 'blue' ? 'text-blue-600' : 'text-purple-600'} font-medium hover:underline`}>{t("products.learnMore")}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`bg-gradient-to-br ${colors.gradient} p-8 flex items-center justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
                    {product.id === 1 ? (
                      <div className="w-full rounded-lg overflow-hidden">
                        <video
                          src={dashboardVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : product.id === 2 ? (
                      <div className="w-full rounded-lg overflow-hidden">
                        <video
                          src={kurirPintarVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : product.id === 3 ? (
                      <div className="w-full rounded-lg overflow-hidden">
                        <video
                          src={kruVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : product.id === 4 ? (
                      <div className="w-full rounded-lg overflow-hidden">
                        <video
                          src={jurnalVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <Icon className="w-16 h-16 mb-4 mx-auto" />
                          <p className="text-lg font-medium">{t(product.titleKey)}</p>
                          <p className="text-sm opacity-80">Interactive Preview</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );

              return product.link ? (
                <Link key={product.id} href={product.link}>
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    data-testid={`card-product-${product.id}`}
                  >
                    {cardContent}
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  data-testid={`card-product-${product.id}`}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
