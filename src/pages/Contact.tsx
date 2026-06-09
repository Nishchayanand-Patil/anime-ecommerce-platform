import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          <p className="mt-6 text-text-secondary">Have questions or concerns? Reach out to our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Get In Touch</h2>
            <p className="text-text-secondary leading-relaxed">
              We typically reply within 24 hours. For order inquiries, please include your Order ID in your message.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="p-3 bg-surface border border-surface-border rounded-lg">
                  <Mail className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>support@otakuvault.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="p-3 bg-surface border border-surface-border rounded-lg">
                  <MapPin className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="font-medium text-white">Headquarters</p>
                  <p>Neo-Tokyo District, Akihabara Sector 4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-surface-border rounded-2xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface-border text-center">
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Please note that the images, products, and designs used on this website are for demonstration and reference purposes only. They take inspiration from real-world works and respective owners, so there might be similarities. We do not own these images or licenses, and they remain the property of their respective creators and owners. This website serves strictly as a technical portfolio project and no copyright infringement is intended.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
