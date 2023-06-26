<template>
  <v-app>
    <v-app-bar app >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <Breadcrumbs />

      <v-spacer></v-spacer>

      <CartIcon />

    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    
  </v-app>
</template>
