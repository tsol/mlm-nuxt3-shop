<template>

  <v-card class="mx-auto text-center" width="344" :to="`/categories/${category.id}`">
    <v-img :src="category.imageUrl" height="200px" cover></v-img>

    <v-card-title> {{ category.name }} </v-card-title>

  </v-card>

</template>

<script lang="ts" setup>
  import { Category } from '~/interfaces/models';

  defineProps<{
    category: Category,
  }>();
</script>

<style lang="scss">

</style>
