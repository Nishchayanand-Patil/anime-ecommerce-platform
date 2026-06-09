import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col selection:bg-neon-purple selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex-grow w-full max-w-[100vw] overflow-x-hidden"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
