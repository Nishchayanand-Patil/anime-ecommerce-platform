import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useStore();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCheckout = () => {
    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_dummy_key";
    
    if (keyId === "rzp_test_dummy_key") {
      setPaymentId("pay_dummy_" + Math.random().toString(36).substring(7));
      setShowSuccessModal(true);
      return;
    }

    const options = {
      key: keyId, 
      amount: Math.round(total * 100),
      currency: "INR",
      name: "OtakuVault",
      description: "Secure Checkout",
      image: "/logo.png",
      handler: function (response: any) {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        setPaymentId(response.razorpay_payment_id);
        setShowSuccessModal(true);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#B026FF"
      },
      modal: {
        ondismiss: function() {
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
        }
      }
    };
    
    try {
      const resetScroll = () => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function () {
        resetScroll();
      });
      rzp1.open();
      
      let attempts = 0;
      const stuckCheck = setInterval(() => {
        attempts++;
        if (!document.querySelector('.razorpay-container') && document.body.style.overflow === 'hidden') {
          resetScroll();
          clearInterval(stuckCheck);
        }
        if (attempts > 10) clearInterval(stuckCheck);
      }, 1000);

    } catch (error) {
      console.error("Razorpay SDK not loaded", error);
      alert("Checkout is currently unavailable. Please try again later.");
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
        <p className="text-text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/catalog" className="inline-flex items-center justify-center px-8 py-3 bg-neon-purple text-white font-semibold rounded-lg glow-effect transition-all hover:bg-neon-purple/90">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-white mb-10">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <AnimatePresence>
            {cart.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-surface border border-surface-border rounded-xl"
              >
                <div className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden bg-background flex-shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/product/${item.id}`} className="font-display font-medium text-lg text-white hover:text-neon-purple transition-colors line-clamp-2 pr-4">{item.name}</Link>
                    <p className="font-mono text-white text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-6">{item.category}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-surface-border rounded-lg bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2.5 text-text-secondary hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center text-white font-mono text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                        className="p-2.5 text-text-secondary hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-text-secondary hover:text-red-500 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-surface border border-surface-border rounded-2xl p-6 sticky top-24">
            <h2 className="font-display font-bold text-xl text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Estimated Tax (8%)</span>
                <span className="font-mono text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span className="font-mono text-white">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="border-t border-surface-border pt-4 mb-8">
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-white">Total</span>
                <span className="font-mono font-bold text-neon-purple tracking-wide">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold rounded-lg flex items-center justify-center gap-2 glow-effect transition-all mb-4"
            >
              Secure Checkout <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-text-secondary text-center">
              Shipping & taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface border border-surface-border rounded-2xl p-8 max-w-sm w-full text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-neon-purple blur-sm shadow-[0_0_15px_#B026FF]"></div>
              
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-neon-purple" />
              </div>
              
              <h2 className="font-display font-bold text-2xl text-white mb-2">Payment Successful!</h2>
              <p className="text-text-secondary mb-6 text-sm">
                Your order has been placed successfully. You will receive an email confirmation shortly.
              </p>
              
              {paymentId && (
                <div className="bg-background rounded-lg p-3 mb-6 bg-opacity-50">
                  <p className="text-xs text-text-secondary mb-1">Transaction ID</p>
                  <p className="font-mono text-sm text-white break-all">{paymentId}</p>
                </div>
              )}
              
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  clearCart();
                  navigate('/');
                }}
                className="w-full py-3 bg-neon-purple text-white font-semibold rounded-lg hover:bg-neon-purple/90 transition-colors glow-effect"
              >
                Continue Shopping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
