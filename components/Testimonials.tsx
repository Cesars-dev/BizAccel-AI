import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We were wasting 20 hours a week on data entry. StopBurningMoney cut that to zero.",
    name: "Alex Rivera",
    role: "CEO, TechGrowth",
    stat: "Saved $45k/yr"
  },
  {
    quote: "The lead gen bots they built are better than our entire SDR team. It's unreal.",
    name: "Sarah Jenkins",
    role: "Founder, ScaleUp",
    stat: "3x Lead Volume"
  },
  {
    quote: "I was skeptical about AI, but the ROI was visible in the first 30 days.",
    name: "Marcus Chen",
    role: "Director, CreativeFlow",
    stat: "10x Faster Shipping"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Don't Just Take Our Word For It
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="text-accent text-xs font-bold uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                  {t.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;