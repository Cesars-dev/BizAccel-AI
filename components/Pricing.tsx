import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Start Building Your <span className="text-gradient">AI Workforce</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
            >
              <div className={`w-5 h-5 bg-primary rounded-full shadow-lg transform transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-accent text-xs font-bold ml-1">SAVE 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-sm text-gray-500 mb-6">For small teams just starting.</p>
            <div className="text-4xl font-heading font-bold mb-6">
              ${isAnnual ? '999' : '1,299'}
              <span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['1 AI Agent Workflow', 'Weekly Strategy Call', 'Email Support', 'Basic Analytics'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-gray-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Growth Tier (Recommended) */}
          <motion.div 
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl border-primary/50 relative bg-primary/5"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
            <p className="text-sm text-gray-400 mb-6">For scaling companies.</p>
            <div className="text-5xl font-heading font-bold mb-6 text-white">
              ${isAnnual ? '2,499' : '2,999'}
              <span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['3 AI Agent Workflows', '24/7 Monitoring', 'Priority Support', 'Custom Dashboard', 'Dedicated Engineer'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full btn-animated font-bold text-white shadow-lg shadow-primary/20">
              Start Scaling
            </button>
          </motion.div>

          {/* Enterprise Tier */}
          <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-sm text-gray-500 mb-6">Custom solutions for big orgs.</p>
            <div className="text-4xl font-heading font-bold mb-6">
              Custom
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Agents', 'Full System Audit', 'SLA Support', 'On-Prem Deployment', 'Custom Training'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-gray-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;