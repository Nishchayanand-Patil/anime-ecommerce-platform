import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const currentCategory = searchParams.get('category');
  const currentQuery = searchParams.get('q');
  const sort = searchParams.get('sort') || 'featured';
  const currentColor = searchParams.get('color');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const setParam = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handlePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const min = formData.get('min') as string;
    const max = formData.get('max') as string;
    setParam('minPrice', min ? min : null);
    setParam('maxPrice', max ? max : null);
  };

  const filteredProducts = useMemo(() => {
    let result = products;
    if (currentCategory) {
      result = result.filter(p => p.category === currentCategory);
    }
    if (currentColor) {
      result = result.filter(p => p.color === currentColor);
    }
    if (minPrice) {
      result = result.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter(p => p.price <= Number(maxPrice));
    }
    if (currentQuery) {
      const q = currentQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.color && p.color.toLowerCase().includes(q))
      );
    }
    
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'newest') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    
    return result;
  }, [currentCategory, currentQuery, sort, currentColor, minPrice, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">
            {currentQuery ? `Search: ${currentQuery}` : currentCategory || 'All Products'}
          </h1>
          <p className="text-text-secondary">{filteredProducts.length} items</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            className="md:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-surface-border rounded-lg bg-surface text-white"
            onClick={() => setIsFiltersOpen(true)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="flex-1 md:flex-none relative">
            <select 
              value={sort}
              onChange={(e) => setParam('sort', e.target.value)}
              className="w-full md:w-auto appearance-none bg-surface border border-surface-border text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-neon-purple"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setParam('category', null)}
                    className={`text-sm ${!currentCategory ? 'text-neon-purple font-medium' : 'text-text-secondary hover:text-white'}`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setParam('category', cat)}
                      className={`text-sm text-left ${currentCategory === cat ? 'text-neon-purple font-medium' : 'text-text-secondary hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-white mb-4">Color</h3>
              <div className="flex flex-wrap gap-2">
                {["Black", "White", "Red", "Blue", "Neon Purple", "Green", "Yellow", "Orange", "Pink", "Gray"].map(c => (
                  <button 
                    key={c}
                    onClick={() => setParam('color', currentColor === c ? null : c)}
                    className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 border ${currentColor === c ? 'border-neon-purple text-neon-purple' : 'border-surface-border text-text-secondary hover:border-white hover:text-white'} transition-colors`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-white mb-4">Price Range</h3>
              <form onSubmit={handlePriceSubmit} className="flex items-center gap-2">
                <input 
                  type="number" 
                  name="min" 
                  placeholder="Min" 
                  defaultValue={minPrice || ''}
                  className="w-full bg-background border border-surface-border text-white text-xs p-2 focus:border-neon-purple focus:outline-none"
                />
                <span className="text-text-secondary">-</span>
                <input 
                  type="number" 
                  name="max" 
                  placeholder="Max" 
                  defaultValue={maxPrice || ''}
                  className="w-full bg-background border border-surface-border text-white text-xs p-2 focus:border-neon-purple focus:outline-none"
                />
                <button type="submit" className="bg-surface border border-surface-border hover:border-neon-purple text-white p-2">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </form>
            </div>
            
            {(currentCategory || currentQuery || currentColor || minPrice || maxPrice || sort !== 'featured') && (
              <button 
                onClick={() => setSearchParams(new URLSearchParams())}
                className="text-sm text-text-secondary hover:text-white underline decoration-surface-border hover:decoration-white underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-surface-border rounded-2xl">
              <h2 className="text-xl font-display text-white mb-2">No products found</h2>
              <p className="text-text-secondary">Try adjusting your search or filters.</p>
              <button 
                onClick={() => setSearchParams(new URLSearchParams())}
                className="mt-6 px-6 py-2 bg-surface text-white rounded-lg border border-surface-border hover:border-current transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map(product => (
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
          )}
        </div>
      </div>

      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm md:hidden"
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-surface w-full max-h-[80vh] rounded-t-2xl p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-xl font-bold text-white">Filters</h2>
                <button onClick={() => setIsFiltersOpen(false)} className="p-2 text-text-secondary hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-white mb-4">Categories</h3>
                  <ul className="space-y-3">
                    <li>
                      <button 
                        onClick={() => { setParam('category', null); setIsFiltersOpen(false); }}
                        className={`text-sm ${!currentCategory ? 'text-neon-purple font-medium' : 'text-text-secondary'}`}
                      >
                        All Categories
                      </button>
                    </li>
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => { setParam('category', cat); setIsFiltersOpen(false); }}
                          className={`text-sm text-left ${currentCategory === cat ? 'text-neon-purple font-medium' : 'text-text-secondary'}`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-white mb-4">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Black", "White", "Red", "Blue", "Neon Purple", "Green", "Yellow", "Orange", "Pink", "Gray"].map(c => (
                      <button 
                        key={c}
                        onClick={() => { setParam('color', currentColor === c ? null : c); setIsFiltersOpen(false); }}
                        className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 border ${currentColor === c ? 'border-neon-purple text-neon-purple' : 'border-surface-border text-text-secondary'} transition-colors`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-white mb-4">Price Range</h3>
                  <form onSubmit={(e) => { handlePriceSubmit(e); setIsFiltersOpen(false); }} className="flex items-center gap-2">
                    <input 
                      type="number" 
                      name="min" 
                      placeholder="Min" 
                      defaultValue={minPrice || ''}
                      className="w-full bg-background border border-surface-border text-white text-xs p-2 focus:border-neon-purple focus:outline-none"
                    />
                    <span className="text-text-secondary">-</span>
                    <input 
                      type="number" 
                      name="max" 
                      placeholder="Max" 
                      defaultValue={maxPrice || ''}
                      className="w-full bg-background border border-surface-border text-white text-xs p-2 focus:border-neon-purple focus:outline-none"
                    />
                    <button type="submit" className="bg-surface border border-surface-border hover:border-neon-purple text-white p-2">
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </form>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
