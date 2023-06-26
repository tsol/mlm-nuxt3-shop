<template>
  <v-breadcrumbs class="text-truncate" :items="crumbs">
    <template v-slot:title="{ item }" >
      <NuxtLink
        :to="item.href"
        class="v-breadcrumbs-item v-breadcrumbs-item--link">
        {{ item.title }}
      </NuxtLink>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts" setup>
  
const { crumbs } = useBreadcrumbs();

</script>

<style lang="scss">
.text-truncate {
  white-space: nowrap;
  // overflow: hidden;
}
</style>
