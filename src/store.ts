import { create } from 'zustand';
import { CartItem, Product, User } from './types';

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  user: User | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  login: (user: User) => void;
  logout: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: JSON.parse(localStorage.getItem('otaku_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('otaku_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('otaku_user') || 'null'),
  
  addToCart: (product, quantity = 1) => set((state) => {
    const existing = state.cart.find(item => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = state.cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...state.cart, { ...product, quantity }];
    }
    localStorage.setItem('otaku_cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),
  
  removeFromCart: (productId) => set((state) => {
    const newCart = state.cart.filter(item => item.id !== productId);
    localStorage.setItem('otaku_cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),
  
  updateQuantity: (productId, quantity) => set((state) => {
    const newCart = state.cart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    );
    localStorage.setItem('otaku_cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),

  clearCart: () => set(() => {
    localStorage.setItem('otaku_cart', '[]');
    return { cart: [] };
  }),
  
  toggleWishlist: (productId) => set((state) => {
    const isWished = state.wishlist.includes(productId);
    const newWishlist = isWished 
      ? state.wishlist.filter(id => id !== productId)
      : [...state.wishlist, productId];
    
    localStorage.setItem('otaku_wishlist', JSON.stringify(newWishlist));
    return { wishlist: newWishlist };
  }),
  
  login: (user) => set(() => {
    localStorage.setItem('otaku_user', JSON.stringify(user));
    return { user };
  }),
  
  logout: () => set(() => {
    localStorage.removeItem('otaku_user');
    return { user: null };
  })
}));
