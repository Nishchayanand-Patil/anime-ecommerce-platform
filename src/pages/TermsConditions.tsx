import { motion } from 'motion/react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          <p className="mt-6 text-text-secondary">Last Updated: October 2023</p>
        </div>

        <section className="space-y-6 text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">1. Agreement to Terms</h2>
          <p>
            By accessing or using OtakuVault, you agree to be bound by these Terms and Conditions and our Privacy
            Policy. If you do not agree to these terms, you may not access our website or use any of our services.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">2. Intellectual Property</h2>
          <p>
            All content on OtakuVault, including but not limited to text, graphics, logos, images, and software,
            is the property of OtakuVault or its content suppliers and is protected by international copyright laws.
            Any fan-art or inspired designs are transformative creations unless explicitly officially licensed.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">3. Product Availability & Pricing</h2>
          <p>
            All products and prices are subject to change without notice. We reserve the right to modify or
            discontinue any product at any time. We are not liable for any modification, price change, suspension,
            or discontinuance of our items.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">4. Return Policy</h2>
          <p>
            If you are dissatisfied with your purchase, you may return the item within 14 days of receipt for a full
            refund, provided the item is in its original, unused condition. Shipping costs for returns will be the
            responsibility of the customer unless the item arrived damaged or defective.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase mt-8">5. Image Disclaimer</h2>
          <p>
            Please note that the images, products, and designs used on this website are for demonstration and reference purposes only. They take inspiration from real-world works and respective owners, so there might be similarities. We do not own these images or licenses, and they remain the property of their respective creators and owners. This website serves strictly as a technical portfolio project and no copyright infringement is intended.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
