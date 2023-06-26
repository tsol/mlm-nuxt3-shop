<template>
  
  <MyHeader>Категории товаров</MyHeader>
    
  <CategoriesSlider />
  
  <MyHeader>Товары</MyHeader>
  
  <ProductsGrid />

</template>

<script lang="ts" setup>
  useBreadcrumbs().setCrumbs([]); 
</script>


