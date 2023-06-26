<template>
  <div v-if="error">Ошибка: {{ error.message }}</div>

  <div v-if="category">
    <MyHeader>Категория: {{ category.name }}</MyHeader>

    <v-card class="mx-auto text-center">
      <v-img :src="category.imageUrl" height="600" cover></v-img>
    </v-card>

    <MyHeader>Товары в категории:</MyHeader>

    <ProductsGrid :categoryId="id" />
  </div>
</template>

<script lang="ts" setup>

import { useCategoriesStore } from '~/store/useCategoriesStore';
const categories = useCategoriesStore();
const category = computed(() => categories.items.find((item) => item.id === id));

const id = parseInt(useRoute().params.id as string);
const { setCrumbs } = useBreadcrumbs();

const { error } = await categories.fetchAll().then((res) => {

  setCrumbs([
    { title: 'Категории', href: '/categories' },
    { title: category?.value?.name || '', href: `/categories/${id}` },
  ]);

  return res;
});

</script>
