<template>
   <v-sheet
    class="mx-auto mb-6"
    max-width="1024"
  >
  <div v-if="error">Ошибка: {{ error.message }}</div> 
  <div v-if="products !== null">
    <v-row>
      <v-col v-for="product in products.items" :key="product.id">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
  </v-sheet>
</template>

<script lang="ts" setup>
import { useProductsStore } from '~/store/useProductsStore';

const props = defineProps<{
  categoryId?: number;
}>();

const products = useProductsStore();
const { error } = await products.fetchItems(props.categoryId);

</script>