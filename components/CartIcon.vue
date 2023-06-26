<template>
  <v-btn class="text-none" rounded stacked to="/cart">
    <v-badge :content="cart.totalItems" color="error" size="x-large">
      <v-icon size="x-large">mdi-cart</v-icon>
    </v-badge>
  </v-btn>
</template>

<script lang="ts" setup>

  import { useCart } from '@/store/useCart';

  const cart = useCart();

</script>