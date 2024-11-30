import { Product } from '@/types/product';

export interface CartState {
  items: (Product & { quantity: number })[];
}

export interface CartSlice {
  cart: CartState['items'];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
}

export const createCartSlice = (set: any): CartSlice => ({
  cart: [],
  addToCart: (product) =>
    set((state: any) => {
      const existingItem = state.cart.find((item: Product) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item: Product & { quantity: number }) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state: any) => ({
      cart: state.cart.filter((item: Product) => item.id !== productId),
    })),
  updateCartItemQuantity: (productId, quantity) =>
    set((state: any) => ({
      cart: state.cart.map((item: Product & { quantity: number }) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
});