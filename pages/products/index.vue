<template>
  <MyHeader>Товары</MyHeader>
  <ProductsGrid />
</template>

<script lang="ts" setup>
useBreadcrumbs().setCrumbs([{ title: 'Товары', href: '/products' }]); 
</script>
