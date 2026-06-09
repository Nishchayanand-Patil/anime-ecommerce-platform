import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products, categories } from '../data';
import ProductCard from '../components/ProductCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featured = products.filter(p => p.isFeatured).slice(0, 4);
  const bestSellers = products.filter(p => p.isPopular).slice(0, 4);

  const categoryImages = useMemo(() => {
    const images: Record<string, string> = {};
    categories.forEach(cat => {
      const categoryProducts = products.filter(p => p.category === cat && p.imageUrl);
      if (categoryProducts.length > 0) {
        images[cat] = categoryProducts[Math.floor(Math.random() * categoryProducts.length)].imageUrl;
      }
    });
    return images;
  }, []);

  return (
    <div className="space-y-32 pb-32 bg-background">
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden border-b border-surface-border selection:bg-neon-purple selection:text-white">
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1f1f22 1px, transparent 1px), linear-gradient(90deg, #1f1f22 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            className="w-full h-full object-cover mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col justify-center h-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="bg-neon-purple/10 text-neon-purple text-[10px] font-black px-3 py-1.5 border border-neon-purple/30 uppercase tracking-[0.2em]">Limitless Drop // {new Date().getFullYear()}</span>
              <div className="h-[1px] w-12 bg-surface-border"></div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl md:text-[110px] leading-[0.85] font-display font-black italic tracking-tighter uppercase mb-8 text-white text-shadow-lg">
              Ascend Your <br />
              <span className="neon-purple">Style</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-lg text-text-secondary text-base md:text-lg mb-12 leading-relaxed font-light tracking-wide border-l-2 border-neon-purple/50 pl-6">
              Premium, ethically sourced anime streetwear designed for the modern enthusiast. Engineered for comfort, inspired by the classics.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/catalog" className="px-8 py-4 bg-neon-purple text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-purple-500 transition-all glow-effect text-center min-w-[200px] shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Shop Collection
              </Link>
              <Link to="/catalog?category=Apparel" className="px-8 py-4 border border-surface-border bg-surface/50 backdrop-blur-sm text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all text-center min-w-[200px]">
                View Lookbook
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      >
        <motion.div variants={fadeInUp} className="flex items-end justify-between mb-12 border-b border-surface-border pb-4">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple mb-2">Explore Directory</h2>
            <p className="font-display font-black italic text-4xl text-white uppercase tracking-tighter">Categories</p>
          </div>
          <Link to="/catalog" className="text-[10px] uppercase font-bold tracking-[0.2em] border-b border-neon-purple pb-1 hover:text-purple-400 transition-colors text-white hidden md:block">Directory Index</Link>
        </motion.div>
        
        <div className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x">
          {categories.slice(0, 6).map((cat, i) => (
            <motion.div key={cat} variants={fadeInUp} className="snap-center">
              <Link 
                to={`/catalog?category=${cat}`}
                className="block w-56 h-72 bg-surface border border-surface-border flex-col items-center justify-center p-6 group transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#050505] transform translate-y-full group-hover:translate-y-full transition-transform duration-500 ease-out z-0"></div>
                {categoryImages[cat] && (
                  <>
                    <img src={categoryImages[cat]} alt={cat} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 z-0" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </>
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <span className="font-display font-bold text-base text-text-secondary group-hover:text-white transition-colors uppercase tracking-widest text-center drop-shadow-lg">{cat}</span>
                  <div className="w-12 h-[2px] bg-neon-purple mt-4 scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      >
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12 border-b border-surface-border pb-4">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple mb-2">Weekly Highlight</h2>
            <p className="font-display font-black italic text-4xl text-white uppercase tracking-tighter">Coveted Pieces</p>
          </div>
          <Link to="/catalog" className="text-[10px] uppercase font-bold tracking-[0.2em] border-b border-neon-purple pb-1 hover:text-purple-400 transition-colors text-white">Full Catalog</Link>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp}>
            <Link to="/catalog?category=Metal Posters" className="relative h-[450px] overflow-hidden group border border-surface-border bg-surface block">
              <img src="/metal-gojo.jpg" alt="Metal Posters" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" loading="lazy" />
              <div className="absolute inset-0 gradient-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12 z-10 transition-transform duration-700 group-hover:-translate-y-4">
                <span className="text-neon-purple font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Displate Collection</span>
                <h3 className="font-display text-5xl font-black italic text-white uppercase tracking-tighter mb-6">Metallic<br/>Artworks</h3>
                <div className="inline-flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white pb-1 group-hover:border-neon-purple group-hover:text-neon-purple transition-colors text-white">
                  Discover
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link to="/catalog?category=Figures" className="relative h-[450px] overflow-hidden group border border-surface-border bg-surface block">
              <img src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=1200" alt="Figures" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" loading="lazy" />
              <div className="absolute inset-0 gradient-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12 z-10 transition-transform duration-700 group-hover:-translate-y-4">
                <span className="text-neon-purple font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Premium Scale</span>
                <h3 className="font-display text-5xl font-black italic text-white uppercase tracking-tighter mb-6">Collector<br/>Figures</h3>
                <div className="inline-flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white pb-1 group-hover:border-neon-purple group-hover:text-neon-purple transition-colors text-white">
                  Pre-Order Now
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12"
      >
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12 border-b border-surface-border pb-4">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple mb-2">Top Tier</h2>
            <p className="font-display font-black italic text-4xl text-white uppercase tracking-tighter">Best Sellers</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
