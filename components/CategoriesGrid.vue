<template>
  <div v-if="error">Ошибка: {{ error.message }}</div>
  <div v-else-if="categories.items !== null">

    <v-sheet class="mx-auto mb-6">
      <div v-if="categories !== null">
        <v-row>
          <v-col v-for="category in categories.items" :key="category.id">
            <CategoryCard :category="category" />
          </v-col>
        </v-row>
      </div>

    </v-sheet>

  </div>
</template>

<script lang="ts" setup>

import { useCategoriesStore } from '~/store/useCategoriesStore';

const categories = useCategoriesStore();

const { error } = await categories.fetchAll();

</script>