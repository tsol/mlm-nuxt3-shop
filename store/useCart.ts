
import { defineStore } from 'pinia'
import { ProductInCart } from '~/interfaces/cart';
import { Product } from '~/interfaces/models'

export const useCart = defineStore('cart', {
  state: () => ({
    items: [] as ProductInCart[]
  }),

  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    getItemById: (state) => {
      return (id: number) => state.items.find((product) => product.id === id)
    },
    getQuantityById: (state) => {
      return (id: number) => state.items.find((product) => product.id === id)?.quantity || 0
    }
  },

  actions: {
    add(item: Product) {
      const existingItem = this.getItemById(item.id);
      if (existingItem) {
        existingItem.quantity++;
        return;
      }
      this.items.push({ ... item, quantity: 1 });
    },
    increment(id: number) {
      const existingItem = this.getItemById(id);
      if (!existingItem) {
        return;
      }
      existingItem.quantity++;
    },
    decrement(id: number) {
      const existingItem = this.getItemById(id);
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        return;
      }
      this.items.splice(this.items.indexOf(existingItem), 1);
    },
    remove(id: number) {
      const existingItem = this.getItemById(id);
      if (!existingItem) {
        return;
      }
      this.items.splice(this.items.indexOf(existingItem), 1);
    },

    clear() {
      this.items = [];
    }
  }
});


