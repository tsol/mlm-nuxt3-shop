<template>
  <MyHeader>Поздравляем!</MyHeader>
  <h3 class="mb-4">Ваш заказ успешно оформлен.</h3>
  <p class="mb-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum provident dignissimos reiciendis veritatis, excepturi beatae? Molestiae est quia at alias non laudantium, perferendis dignissimos officiis saepe voluptatem deserunt perspiciatis rerum.
  </p>
  <NuxtLink to="/">На главную</NuxtLink>
</template>

<script setup lang="ts">
useBreadcrumbs().setCrumbs([{ title: 'Корзина', href: '/cart' }]);
</script>
