import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { useStore } from '../store';
import React, { useState } from 'react';

export default function Navbar() {
  const { cart, wishlist, user } = useStore();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get('q');
    if (query) navigate(`/catalog?q=${query}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-surface-border h-20">
      <div className="w-full px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="OtakuVault" className="h-10 w-auto object-contain fallback-bg" onError={(e) => { e.currentTarget.style.display='none'; }} />
            <span className="font-display font-black text-xl italic tracking-tighter uppercase text-white hover:text-neon-purple transition-colors">OtakuVault</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-12 text-sm font-black tracking-[0.1em] uppercase text-text-secondary">
             <Link to="/catalog" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:text-white transition-colors">Collections</Link>
             <Link to="/catalog?category=Hoodies" className="hover:text-white transition-colors">Apparel</Link>
             <Link to="/catalog?category=Figures" className="hover:text-white transition-colors">Collectibles</Link>
             <Link to="/catalog?category=Manga" className="hover:text-white transition-colors">Manga</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative group w-48">
             <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary group-focus-within:text-neon-purple transition-colors" />
             <input
               type="text"
               name="q"
               className="w-full bg-transparent border-b border-surface-border pl-7 pr-2 py-1 text-xs font-medium text-white placeholder-text-secondary focus:outline-none focus:border-neon-purple transition-colors uppercase tracking-widest"
               placeholder="SEARCH..."
             />
          </form>

          <Link to="/wishlist" className="text-text-secondary hover:text-white transition-colors relative group">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-neon-purple text-white text-[9px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="text-text-secondary hover:text-white transition-colors relative group">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-neon-purple text-white text-[9px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to={user ? "/profile" : "/login"} className="px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors ml-2">
            {user ? "Profile" : "Sign In"}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="text-text-secondary relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-neon-purple text-white text-[9px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-secondary hover:text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b border-surface-border px-4 py-6 space-y-6 absolute w-full top-20 left-0 z-40 shadow-2xl">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input
              type="text"
              name="q"
              className="w-full bg-surface border border-surface-border pl-10 pr-4 py-3 text-xs font-bold text-white placeholder-text-secondary focus:outline-none focus:border-neon-purple uppercase tracking-widest"
              placeholder="SEARCH PRODUCTS..."
            />
          </form>
          
          <div className="flex flex-col gap-4 text-sm font-black tracking-widest uppercase">
            <Link to="/catalog" className="text-white border-l-2 border-transparent hover:border-neon-purple pl-4 transition-all" onClick={() => setIsMenuOpen(false)}>All Collections</Link>
            <Link to="/catalog?category=Hoodies" className="text-text-secondary hover:text-white border-l-2 border-transparent hover:border-neon-purple pl-4 transition-all" onClick={() => setIsMenuOpen(false)}>Apparel</Link>
            <Link to="/catalog?category=Figures" className="text-text-secondary hover:text-white border-l-2 border-transparent hover:border-neon-purple pl-4 transition-all" onClick={() => setIsMenuOpen(false)}>Collectibles</Link>
            <Link to="/catalog?category=Manga" className="text-text-secondary hover:text-white border-l-2 border-transparent hover:border-neon-purple pl-4 transition-all" onClick={() => setIsMenuOpen(false)}>Manga</Link>
            <Link to="/catalog?category=Metal Posters" className="text-text-secondary hover:text-white border-l-2 border-transparent hover:border-neon-purple pl-4 transition-all" onClick={() => setIsMenuOpen(false)}>Metal Posters</Link>
            <div className="h-px bg-surface-border my-2"></div>
            <Link to="/wishlist" className="flex justify-between items-center text-text-secondary hover:text-white pl-4" onClick={() => setIsMenuOpen(false)}>
              Wishlist <span className="text-neon-purple bg-neon-purple/10 px-2 py-0.5 text-[10px]">{wishlist.length}</span>
            </Link>
            <Link to={user ? "/profile" : "/login"} className="text-neon-purple pl-4" onClick={() => setIsMenuOpen(false)}>
              {user ? "Profile / Account" : "Sign In to Vault"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
