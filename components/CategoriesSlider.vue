<template>
  <div v-if="error">Ошибка: {{ error.message }}</div>
  <div v-else-if="categories.items !== null">

    <v-sheet class="mx-auto mb-6" max-width="1024">
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="category in categories.items" :key="category.id">
          <CategoryCard :category="category" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

  </div>
</template>

<script lang="ts" setup>

import { useCategoriesStore } from '~/store/useCategoriesStore';

const categories = useCategoriesStore();

const { error } = await categories.fetchAll();

</script>