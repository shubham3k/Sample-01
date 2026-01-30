import { motion } from "framer-motion";
import { 
  Building2, 
  Landmark, 
  Smartphone, 
  CreditCard, 
  ShoppingBag 
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description: "Public and private sector banks, scheduled commercial banks",
  },
  {
    icon: Building2,
    title: "NBFCs & Microfinance",
    description: "Non-banking financial companies and microfinance institutions",
  },
  {
    icon: Smartphone,
    title: "Fintech & Digital Lending",
    description: "Digital lending platforms and buy-now-pay-later services",
  },
  {
    icon: CreditCard,
    title: "Credit Card Companies",
    description: "Credit card issuers and payment processing companies",
  },
  {
    icon: ShoppingBag,
    title: "Retail Finance",
    description: "Consumer durables financing and retail credit providers",
  },
];

const IndustriesServed = () => {
  return (
    <section id="industries" className="section-padding bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 tracking-tight">
            Trusted Across the Financial Sector
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with leading financial institutions across India, 
            delivering consistent results across diverse portfolio types.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 hover:border-cream/20 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-cream mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-cream/60 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-cream/40 text-sm mb-8 tracking-wide font-medium">TRUSTED BY LEADING INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Partner Bank 1", "Partner Bank 2", "Partner NBFC", "Partner Fintech", "Partner Finance"].map((name, index) => (
              <div key={index} className="text-cream/30 font-semibold text-lg hover:text-cream/50 transition-colors">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;
