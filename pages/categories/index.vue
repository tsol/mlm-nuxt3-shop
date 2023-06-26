<template>
  <MyHeader>Категории товаров</MyHeader>
  <CategoriesGrid />
</template>

<script lang="ts" setup>
useBreadcrumbs().setCrumbs([{ title: 'Товары', href: '/products' }]); 
</script>
