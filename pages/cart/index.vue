<template>
  <v-btn color="success" class="mt-4 mb-4" @click="checkout" :disabled="empty">
    Оформить заказ
  </v-btn>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Товар
        </th>
        <th class="text-left">
          Название
        </th>
        <th class="text-left">
          Цена
        </th>
        <th class="text-left">
          Количество
        </th>
        <th class="text-left">
          Стоимость
        </th>
        <th class="text-left">
          Удалить
        </th>
      </tr>
    </thead>
    <tbody v-if="!empty">
      <tr v-for="item in items" :key="item.id">
        <td>
          <v-img :src="item.thumbnailUrl" height="100px" cover></v-img>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td class="text-center">
          <v-btn density="compact" icon="mdi-minus" @click="cart.decrement(item.id)"></v-btn>
          <span class="space"> {{ item.quantity }} </span>
          <v-btn density="compact" icon="mdi-plus" @click="cart.increment(item.id)"></v-btn>
        </td>
        <td>{{ item.price * item.quantity }}</td>
        <td>
          <v-btn color="error" @click="cart.remove(item.id)">Удалить</v-btn>
        </td>
      </tr>
      <tr>
        <td colspan="3" class="text-right">
          Итого:
        </td>
        <td class="text-center">
          {{ cart.totalItems }}
        </td>
        <td>
          {{ cart.totalPrice }} р.
        </td>
        <td></td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="6" class="text-center">
          Корзина пуста
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCart } from '~/store/useCart';

useBreadcrumbs().setCrumbs([{ title: 'Корзина', href: '/cart' }]);

const cart = useCart();
const { items } = storeToRefs(cart);
const empty = computed(() => items.value.length === 0);

const checkout = async () => {
  // cart.checkout();
  await navigateTo('/cart/checkout');
};

</script>

<style scoped lang="scss">
.space {
  margin: 0 10px;
}
</style>


