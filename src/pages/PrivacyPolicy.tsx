import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          <p className="mt-6 text-text-secondary">Last Updated: October 2023</p>
        </div>

        <section className="space-y-4 text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">1. Information We Collect</h2>
          <p>
            At OtakuVault, we collect information that you successfully provide to us when creating an account,
            placing an order, or subscribing to our newsletters. This includes your name, email address, shipping
            address, and payment details. We also collect non-identifiable usage data to enhance your shopping
            experience.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase mt-8">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to process your orders, communicate with you about shipping and
            promotions, and improve our website functionality. We employ industry-standard encryption algorithms
            to protect your personal data from unauthorized access.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase mt-8">3. Third-Party Services</h2>
          <p>
            We may share your data with trusted third-party service providers (such as shipping carriers and
            payment processors) solely for the purpose of fulfilling your orders. These providers are bound by
            strict confidentiality agreements and are subject to their own respective privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase mt-8">4. Your Data Rights</h2>
          <p>
            You have the right to request access to, modification of, or deletion of your personal data at any
            time. To exercise these rights or if you have any questions regarding how your data is handled, please
            contact our support team.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase mt-8">5. Image Usage Disclaimer</h2>
          <p>
            Please note that the images, products, and designs used on this website are for demonstration and reference purposes only. They take inspiration from real-world works and respective owners, so there might be similarities. We do not own these images or licenses, and they remain the property of their respective creators and owners. This website serves strictly as a technical portfolio project and no copyright infringement is intended.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
