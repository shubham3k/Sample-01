import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Lightbulb, 
  PhoneCall, 
  Handshake, 
  FileCheck, 
  BarChart 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Account Analysis",
    description: "Comprehensive portfolio assessment and debtor profiling to understand recovery potential.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Customized recovery strategies based on debt age, amount, and customer demographics.",
  },
  {
    icon: PhoneCall,
    title: "Customer Contact",
    description: "Multi-channel outreach through calls, SMS, email, and field visits as needed.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Settlement",
    description: "Professional negotiation to achieve optimal settlement terms for all parties.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Closure",
    description: "Complete documentation and formal closure of recovered accounts.",
  },
  {
    icon: BarChart,
    title: "Reporting & Analytics",
    description: "Detailed performance reports and insights for continuous improvement.",
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">OUR PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            A Proven Recovery Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our systematic approach ensures consistent results while maintaining 
            compliance and preserving customer relationships.
          </p>
        </motion.div>

        {/* Steps Grid - Clean Modern Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-card rounded-xl p-6 card-elevated border border-border hover:border-primary/30 transition-all group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="pt-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
