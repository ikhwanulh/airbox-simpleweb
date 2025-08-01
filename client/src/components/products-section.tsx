import { motion } from "framer-motion";
import { BarChart3, Truck, Users, Calculator } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Interactive Dashboard & Task Monitoring",
    description: "Real-time visualization and monitoring system that provides comprehensive insights into your operations. Track KPIs, monitor task progress, and make data-driven decisions with our intuitive dashboard interface.",
    icon: BarChart3,
    color: "blue",
    tags: ["Real-time Analytics", "Task Management", "KPI Tracking"],
  },
  {
    id: 2,
    title: "Kurir Pintar",
    description: "End-to-end supply chain visibility for logistics and courier operations — integrated with air, sea, and land transport modes. Track shipments, optimize routes, and ensure delivery excellence across all transportation channels.",
    icon: Truck,
    color: "green",
    tags: ["Multi-modal Tracking", "Route Optimization", "Real-time Updates"],
  },
  {
    id: 3,
    title: "Kru Pintar",
    description: "HRIS solution that simplifies the employment lifecycle for high-volume teams, ensuring compliance and automation. Streamline recruitment, onboarding, payroll, and performance management with intelligent workflows.",
    icon: Users,
    color: "purple",
    tags: ["HR Automation", "Compliance", "Performance Tracking"],
  },
  {
    id: 4,
    title: "Jurnal Pintar",
    description: "Smart accounting system with modular setup, local tax compliance, and support for automation and analytics. Streamline financial operations with intelligent bookkeeping and comprehensive reporting capabilities.",
    icon: Calculator,
    color: "orange",
    tags: ["Tax Compliance", "Automation", "Analytics"],
  },
];

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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Products</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to streamline your operations and drive measurable results.
            </p>
          </motion.div>
          
          <div className="grid gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const colors = colorVariants[product.color as keyof typeof colorVariants];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:col-start-2" : ""}`}>
                      <div className={`${colors.icon} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{product.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`${colors.tags} px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-br ${colors.gradient} p-8 flex items-center justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
                      <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <Icon className="w-16 h-16 mb-4 mx-auto" />
                          <p className="text-lg font-medium">{product.title}</p>
                          <p className="text-sm opacity-80">Interactive Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}