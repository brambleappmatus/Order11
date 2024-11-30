import { Product } from '@/types/product';

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Chocolate Bar',
    price: 2.50,
    description: 'Delicious milk chocolate bar',
    imageUrl: 'https://gymbeam.sk/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/p/r/protein_bar_-_barebells_-_white_chocolate_almond.png'
  },
  {
    id: '2',
    name: 'Potato Chips',
    price: 1.99,
    description: 'Crispy salted potato chips',
    imageUrl: 'https://gymbeam.sk/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/p/r/protein_bar_-_barebells_-_white_chocolate_almond.png'
  }
];

export interface ProductState {
  products: Product[];
}

export interface ProductSlice {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  duplicateProduct: (productId: string) => void;
}

export const createProductSlice = (set: any): ProductSlice => ({
  products: defaultProducts,
  addProduct: (product) =>
    set((state: any) => ({
      products: [...state.products, product]
    })),
  editProduct: (product) =>
    set((state: any) => ({
      products: state.products.map((p: Product) =>
        p.id === product.id ? product : p
      )
    })),
  deleteProduct: (productId) =>
    set((state: any) => ({
      products: state.products.filter((p: Product) => p.id !== productId)
    })),
  duplicateProduct: (productId) =>
    set((state: any) => {
      const product = state.products.find((p: Product) => p.id === productId);
      if (!product) return state;
      const newProduct = {
        ...product,
        id: String(Date.now()),
        name: `${product.name} (Copy)`
      };
      return { products: [...state.products, newProduct] };
    }),
});