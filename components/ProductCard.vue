<template>
  <v-card class="mx-auto text-center" width="344" :to="`/products/${product.id}`">
    <v-img :src="product.imageUrl" height="200px" cover></v-img>

    <v-card-title> {{ product.name }} </v-card-title>

    <v-card-actions class="mb-3">
      <v-spacer></v-spacer>

      <div class="price"> {{ product.price }} руб. </div>

      <v-spacer></v-spacer>

      <v-btn color="error" variant="elevated" size="large" @click.prevent="cart.add(product)">
        {{ buttonLabel }}
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>

  </v-card>

  <v-card v-if="withDescription" class="mx-auto" width="344">
    <v-card-text>
      <div class="text-h6">Описание</div>
      <div class="text-body-2" v-html="product.description"></div>
    </v-card-text>
  </v-card>

</template>

<script lang="ts" setup>
import { Product } from '~/interfaces/models';
import { useCart } from '@/store/useCart';

const props = defineProps<{
  product: Product,
  withDescription?: boolean,
  width?: number,
}>();

const cart = useCart();

const buttonLabel = computed(() => {
  const quantity = cart.getQuantityById(props.product.id);
  return quantity > 0 ? `x ${quantity}` : 'ХОЧУ';
});

</script>

<style lang="scss">
.price {
  font-size: 20px;
  font-weight: bold;
  color: #FF0000;
}
</style>
