import { atom } from 'jotai';
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

export const productsAtom = atom<Product[]>(defaultProducts);
export const cartAtom = atom<(Product & { quantity: number })[]>([]);
export const darkModeAtom = atom<boolean>(false);