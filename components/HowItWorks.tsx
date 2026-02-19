import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Free AI Audit",
    desc: "We analyze your workflows to identify money pits."
  },
  {
    num: "02",
    title: "Custom Strategy",
    desc: "We design a roadmap to automate high-friction areas."
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We build and deploy your custom AI agents."
  },
  {
    num: "04",
    title: "Scale Results",
    desc: "You save time and money. We optimize for growth."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative bg-gradient-to-b from-transparent to-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">From Chaos to <span className="text-accent">Clarity</span></h2>
           <p className="text-gray-400">Our simple 4-step framework to operational excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-2xl border-t border-white/10 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-heading font-bold text-white/5 mb-6 group-hover:text-primary/20 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Connector Line (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;