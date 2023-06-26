<template>
  <div v-if="error">Ошибка: {{ error.message }}</div>
  <div v-if="product">
    <MyHeader>Товар: {{ product.name }}</MyHeader>
    <ProductCard :product="product" withDescription />
  </div>
</template>

<script lang="ts" setup>

import { useProductsStore } from '~/store/useProductsStore';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { currentProduct: product } = storeToRefs(productsStore);

const id = parseInt(useRoute().params.id as string);

const { setCrumbs } = useBreadcrumbs();

const { error } = await productsStore.setCurrent(id).then( (res) => {

  setCrumbs([
    { title: 'Товары', href: '/products' },
    { title: product.value?.name || '', href: `/products/${id}` },
  ]);

  return res;
});

</script>
