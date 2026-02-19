import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, BarChart3, Bot, Layers } from 'lucide-react';

const Services = [
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Close 3x More Deals",
    description: "Automated pipeline optimization that prioritizes high-value leads.",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "Ship 10x Faster",
    description: "Remove manual bottlenecks from your product cycle.",
    className: "md:col-span-1"
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Generate Leads on Autopilot",
    description: "AI agents that find and warm up prospects 24/7.",
    className: "md:col-span-1"
  },
  {
    icon: <Bot className="w-6 h-6 text-pink-400" />,
    title: "Automate Admin Work",
    description: "Stop doing data entry. Let AI handle the boring stuff.",
    className: "md:col-span-2"
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-400" />,
    title: "Resource Optimization",
    description: "Cut cloud & operational costs with AI audit.",
    className: "md:col-span-1 md:col-start-4 md:row-start-1" // Adjusted for visual balance
  }
];

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:max-w-2xl"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            We Build Systems That <span className="text-gradient">Print Money</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Stop relying on hope. We implement proven AI frameworks that measurably increase your bottom line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {Services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative group overflow-hidden transition-colors hover:bg-white/5 ${service.className}`}
            >
              {/* Hover Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;