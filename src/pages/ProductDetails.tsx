import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Minus, Plus, ChevronRight, ShieldCheck, Truck, ArrowLeft, Maximize2, X } from 'lucide-react';
import { products } from '../data';
import { useStore } from '../store';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMagnified, setIsMagnified] = useState(false);
  const { addToCart, toggleWishlist, wishlist } = useStore();

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setIsMagnified(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isZoomed]);

  if (!product) return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h2 className="text-2xl font-display text-white mb-4">Product Not Found</h2>
      <Link to="/catalog" className="text-neon-purple hover:underline flex items-center justify-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </Link>
    </div>
  );

  const isWished = wishlist.includes(product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
             onClick={() => setIsZoomed(false)}>
          <button 
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 p-3 bg-surface border border-surface-border text-white rounded-full hover:bg-white hover:text-black transition-colors z-[60]"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className={`transition-transform duration-300 max-w-full max-h-full object-contain rounded-lg shadow-2xl ${isMagnified ? 'scale-150 sm:scale-[2] cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMagnified(!isMagnified);
              }}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex text-sm text-text-secondary mb-8">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/catalog" className="hover:text-white">Catalog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/catalog?category=${product.category}`} className="hover:text-white">{product.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div 
              className="aspect-[4/5] sm:aspect-square bg-surface border border-surface-border rounded-2xl overflow-hidden relative group cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <img src={product.imageUrl} alt={product.name} loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <span className="text-neon-purple font-mono tracking-widest uppercase text-sm mb-4 block">{product.category}</span>
            <h1 className="font-display text-4xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
            <p className="font-mono text-2xl text-text-secondary">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="border-t border-b border-surface-border py-8 mb-8 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-text-primary font-medium">Quantity:</span>
              <div className="flex items-center border border-surface-border rounded-lg bg-background">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-text-secondary hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-white font-mono">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 text-text-secondary hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-text-secondary ml-4">
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addToCart(product, quantity)}
                disabled={product.stock === 0}
                className="flex-1 py-4 bg-neon-purple hover:bg-neon-purple/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg flex items-center justify-center gap-2 glow-effect transition-all"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="py-4 px-6 bg-surface border border-surface-border hover:border-text-secondary text-white rounded-lg flex items-center justify-center transition-all group"
              >
                <Heart className={`w-5 h-5 ${isWished ? 'fill-neon-purple text-neon-purple' : 'text-text-secondary group-hover:text-white'}`} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Specifications</h3>
              <dl className="space-y-2">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-3 gap-4 text-sm">
                    <dt className="text-text-secondary">{key}</dt>
                    <dd className="col-span-2 text-white">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3 py-6 mt-6 border-t border-surface-border text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-neon-purple" /> Free standard shipping over $100
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-neon-purple" /> Secure encrypted checkout
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="pt-16 border-t border-surface-border">
          <h2 className="font-display text-2xl font-bold text-white mb-8">Related Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
    </>
  );
}
