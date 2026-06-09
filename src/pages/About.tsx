import { motion } from 'motion/react';
import { Package, Globe, Shield, Zap } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Package className="w-8 h-8 text-neon-purple" />, title: "Premium Grails", desc: "Sourcing only the highest quality streetwear and figures from trusted artisans." },
    { icon: <Globe className="w-8 h-8 text-neon-purple" />, title: "Global Shipping", desc: "We deliver your favorite otaku merch worldwide with insured shipping." },
    { icon: <Shield className="w-8 h-8 text-neon-purple" />, title: "Authenticity", desc: "Every item is verified for quality and authenticity before dispatched." },
    { icon: <Zap className="w-8 h-8 text-neon-purple" />, title: "Fast Support", desc: "Our fellow otaku support team operates 24/7 to resolve any issues." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-5 mb-8">
            <img src="/logo.png" alt="OtakuVault" className="h-24 w-auto object-contain fallback-bg" onError={(e) => { e.currentTarget.style.display='none'; }} />
            <span className="font-display font-black text-4xl md:text-5xl italic tracking-tighter uppercase text-white">OtakuVault</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-purple-400">OtakuVault</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary leading-relaxed">
            Founded by a collective of passionate anime enthusiasts, OtakuVault was built on the vision of 
            providing a premium marketplace for high-quality, aesthetic streetwear, figures, and collectibles. 
            We grew tired of low-effort merchandise and set out to curate the absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-surface-border p-8 rounded-2xl text-center hover:border-neon-purple transition-colors"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-neon-purple/10 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-surface border border-surface-border p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">Disclaimer</h2>
          <p className="max-w-2xl mx-auto text-sm text-text-secondary leading-relaxed">
            Please note that the images, products, and designs used on this website are for demonstration and reference purposes only. They take inspiration from real-world works and respective owners, so there might be similarities. We do not own these images or licenses, and they remain the property of their respective creators and owners. This website serves strictly as a technical portfolio project and no copyright infringement is intended.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
