import { defineStore } from 'pinia';
import { Product } from '~/interfaces/models';

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [] as Product[],
    currentCategoryId: null as number | undefined | null,
    currentProduct: null as Product | null,
  }),
  getters: {},
  actions: {
    async setCurrent(id: number) {
      if (this.currentProduct?.id === id) return { data: this.currentProduct };

      const found = this.items.find((product) => product.id === id);
      if (found) {
        this.currentProduct = found;
        return { data: this.currentProduct };
      }

      const { data, error } = await useNuxtApp().$api.getProduct(id);
      if (data.value) this.currentProduct = data.value;
      
      return { error, data };

    },
    async fetchItems(categoryId?: number) {
      if (this.currentCategoryId === categoryId) return { data: this.items };

      const { data, error } = await useNuxtApp().$api.getProducts(categoryId);
      this.items = data.value || [];
      this.currentCategoryId = categoryId;

      return { error, data };
    },
  },
});
