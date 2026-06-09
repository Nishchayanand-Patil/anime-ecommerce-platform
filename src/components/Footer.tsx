import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-surface-border text-text-secondary mt-auto pt-16 pb-8">
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="flex items-center gap-3">
               <img src="/logo.png" alt="OtakuVault" className="h-16 w-auto object-contain fallback-bg" onError={(e) => { e.currentTarget.style.display='none'; }} />
               <span className="font-display font-black text-2xl italic tracking-tighter uppercase text-white hover:text-neon-purple transition-colors">OtakuVault</span>
            </Link>
            <p className="text-xs leading-relaxed text-center md:text-left">
              The ultimate anime merchandise marketplace. We curate the best apparel, figures, and collectibles for the true otaku.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-2">Shop</h3>
            <Link to="/catalog?category=Hoodies" className="text-xs hover:text-neon-purple transition-colors">Hoodies</Link>
            <Link to="/catalog?category=Oversized T-Shirts" className="text-xs hover:text-neon-purple transition-colors">Oversized T-Shirts</Link>
            <Link to="/catalog?category=Figures" className="text-xs hover:text-neon-purple transition-colors">Figures</Link>
            <Link to="/catalog?category=Mouse Pads" className="text-xs hover:text-neon-purple transition-colors">Mouse Pads</Link>
            <Link to="/catalog?category=Manga" className="text-xs hover:text-neon-purple transition-colors">Manga</Link>
            <Link to="/catalog?category=Metal Posters" className="text-xs hover:text-neon-purple transition-colors">Metal Posters</Link>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-2">Support & Legal</h3>
            <Link to="/about" className="text-xs hover:text-neon-purple transition-colors">About Us</Link>
            <Link to="/contact" className="text-xs hover:text-neon-purple transition-colors">Contact</Link>
            <Link to="/privacy" className="text-xs hover:text-neon-purple transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs hover:text-neon-purple transition-colors">Terms & Conditions</Link>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-2">Connect</h3>
            <a href="#" className="text-xs hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-xs hover:text-white transition-colors">Twitter (X)</a>
            <a href="#" className="text-xs text-neon-purple hover:text-white transition-colors">Discord Community</a>
          </div>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} OtakuVault. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span>Secure Payment</span>
            <span>Authenticity Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
