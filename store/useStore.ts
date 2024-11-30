'use client';

import { create } from 'zustand';
import { Product } from '@/types/product';
import { loadProducts, saveProducts } from '@/utils/storage';

interface StoreState {
  products: Product[];
  cart: (Product & { quantity: number })[];
  isDarkMode: boolean;
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  duplicateProduct: (productId: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<StoreState>((set) => ({
  products: loadProducts(),
  cart: [],
  isDarkMode: false,

  addProduct: (product) => set(state => {
    const newProducts = [...state.products, product];
    saveProducts(newProducts);
    return { products: newProducts };
  }),

  editProduct: (product) => set(state => {
    const newProducts = state.products.map(p => p.id === product.id ? product : p);
    saveProducts(newProducts);
    return { products: newProducts };
  }),

  deleteProduct: (productId) => set(state => {
    const newProducts = state.products.filter(p => p.id !== productId);
    saveProducts(newProducts);
    return {
      products: newProducts,
      cart: state.cart.filter(item => item.id !== productId)
    };
  }),

  duplicateProduct: (productId) => set(state => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return state;
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      name: `${product.name} (Copy)`
    };
    const newProducts = [...state.products, newProduct];
    saveProducts(newProducts);
    return { products: newProducts };
  }),

  addToCart: (product) => set(state => {
    const existingItem = state.cart.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  removeFromCart: (productId) => set(state => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  updateCartItemQuantity: (productId, quantity) => set(state => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    )
  })),

  toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode }))
}));