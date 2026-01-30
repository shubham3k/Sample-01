import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Shield, label: "RBI Compliant" },
  { icon: Award, label: "ISO 27001 Certified" },
  { icon: Users, label: "50+ Professionals" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 rounded-full px-5 py-2.5 mb-10"
          >
            <CheckCircle className="h-4 w-4 text-sage" />
            <span className="text-sm font-medium text-cream/90 tracking-wide">Trusted by 100+ Financial Institutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1] mb-8 tracking-tight"
          >
            Maximize Your Recovery Rates with{" "}
            <span className="text-primary">Compliant, Ethical</span> Collection Services
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Industry-leading debt recovery solutions with 85%+ recovery rates, 
            complete regulatory compliance, and transparent processes that protect your brand reputation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-crimson-dark text-primary-foreground text-base px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream text-base px-8 py-6 font-medium"
            >
              <a href="#process">View Our Process</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2.5 text-cream/60">
                <badge.icon className="h-5 w-5 text-sage" />
                <span className="text-sm font-medium tracking-wide">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "85%+", label: "Recovery Rate" },
            { value: "₹500Cr+", label: "Recovered Annually" },
            { value: "100+", label: "Partner Institutions" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-cream/5 backdrop-blur-sm border border-cream/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-cream mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-cream/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            d="M0 100L1440 100L1440 40C1440 40 1140 0 720 0C300 0 0 40 0 40L0 100Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
