import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function Wishlist() {
  const { wishlist } = useStore();
  const wishlistedItems = products.filter(p => wishlist.includes(p.id));

  if (wishlistedItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-4">Your Wishlist is Empty</h1>
        <p className="text-text-secondary mb-8">Save items you like to your wishlist to find them easily later.</p>
        <Link to="/catalog" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-surface-border hover:border-neon-purple text-white font-semibold rounded-lg transition-all">
          Explore Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-display text-4xl font-bold text-white">Your Wishlist</h1>
        <span className="text-text-secondary">{wishlistedItems.length} items</span>
      </div>
      
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {wishlistedItems.map(product => (
          <motion.div 
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
