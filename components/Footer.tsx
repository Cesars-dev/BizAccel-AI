import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
              <span className="font-heading font-bold text-lg">StopBurningMoney</span>
            </div>
            <p className="text-gray-500 mb-4">
              We help businesses automate workflows and save millions in lost productivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Sales Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lead Gen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Process Audit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom AI Agents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p>© 2024 Stop Burning Money Inc. All rights reserved.</p>
          <p>Designed for High Performers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;