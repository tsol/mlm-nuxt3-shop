import { defineStore } from 'pinia';
import { Category } from '~/interfaces/models';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    items: [] as Category[],
  }),
  actions: {
    async fetchAll() {
      if (this.items.length > 0) return { data: this.items };
      
      const { data, error } = await useNuxtApp().$api.getCategories();
      if (data.value) this.items = data.value;
      
      return { error, data };
    },
  },
});
