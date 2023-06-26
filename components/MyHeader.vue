<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;

  margin-top: 3rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: 768px) {
  .title {
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    padding-left: 2rem;
  }
}
</style>
