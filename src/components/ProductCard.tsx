import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = React.memo(({ product }: ProductCardProps) => {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const isWished = wishlist.includes(product.id);

  const bgText = useMemo(() => product.category.split(' ')[0].toUpperCase(), [product.category]);

  return (
    <div className="product-card group flex flex-col bg-surface border border-surface-border p-4 transition-all cursor-pointer h-full relative overflow-hidden">
      <div className="relative h-64 bg-[#050505] mb-5 flex-shrink-0 flex items-center justify-center overflow-hidden border border-surface-border group-hover:border-neon-purple/30 transition-colors">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
           <div className="text-white/[0.03] font-black text-6xl uppercase tracking-[0.2em] -rotate-12 whitespace-nowrap">{bgText}</div>
        </div>
        
        {product.isNew && (
          <span className="absolute top-3 right-3 z-10 bg-neon-purple text-[9px] font-black px-2 py-1 uppercase tracking-tighter text-white">
            New Arrival
          </span>
        )}
        {product.stock <= 10 && product.stock > 0 && (
          <span className="absolute top-3 right-3 z-10 bg-red-600 text-[9px] font-black px-2 py-1 uppercase tracking-tighter text-white">
            Low Stock
          </span>
        )}
        
        <Link to={`/product/${product.id}`} className="w-full h-full relative z-0 p-4 flex items-center justify-center">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
          />
        </Link>
        
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 ease-out gradient-overlay z-20">
          <button 
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="w-full py-3 bg-white text-black hover:bg-neon-purple hover:text-white text-[10px] uppercase tracking-[0.2em] font-black flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-3 h-3" /> Quick Add
          </button>
        </div>
      </div>
      
      <Link to={`/product/${product.id}`} className="flex flex-col flex-grow relative z-10">
        <h3 className="text-[13px] font-bold uppercase mb-1.5 tracking-widest text-white leading-relaxed line-clamp-2">{product.name}</h3>
        <p className="text-text-secondary text-[10px] mb-4 uppercase tracking-[0.2em]">{product.category}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-surface-border">
          <span className="text-xl font-black text-white tracking-tight">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className={cn(
              "w-9 h-9 flex items-center justify-center border border-surface-border text-text-secondary hover:bg-white hover:text-black transition-colors rounded-none",
              isWished && "border-neon-purple bg-neon-purple text-white hover:bg-neon-purple hover:border-neon-purple"
            )}
          >
            <Heart className={cn("w-4 h-4", isWished && "fill-current")} />
          </button>
        </div>
      </Link>
    </div>
  );
});

export default ProductCard;
