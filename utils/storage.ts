import { Product } from '@/types/product';

const STORAGE_KEY = 'snackshop_products';

export const loadProducts = (): Product[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (!storedProducts) {
      const defaultProducts: Product[] = [
        {
          id: '1',
          name: 'Chocolate Bar',
          price: 2.50,
          description: 'Delicious milk chocolate bar',
          imageUrl: 'https://placehold.co/400x400?text=Chocolate'
        },
        {
          id: '2',
          name: 'Potato Chips',
          price: 1.99,
          description: 'Crispy salted potato chips',
          imageUrl: 'https://placehold.co/400x400?text=Chips'
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
      return defaultProducts;
    }
    return JSON.parse(storedProducts);
  } catch (error) {
    console.error('Error loading products from storage:', error);
    return [];
  }
};

export const saveProducts = (products: Product[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products to storage:', error);
  }
};

export const generateId = (): string => {
  return Date.now().toString();
};