import React from 'react';

const LOGOS = [
  "Acme Corp", "TechFlow", "DataSystems", "InnovateAI", "FutureScale", "HyperGrowth", "NextLevel", "Streamline"
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
         <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by 50+ High-Growth Companies</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Double the logos for seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <span key={index} className="text-xl md:text-2xl font-heading font-bold text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;