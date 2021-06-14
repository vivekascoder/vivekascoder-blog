<template>
  <div>
    <Navbar />
    <div class="h-20"></div>
    <Newsletter />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
* {
  font-family: "Ubuntu";
}
*::selection {
  @apply bg-gray-800 text-foreground;
}
.nuxt-content-highlight,
.nuxt-content-highlight * {
  font-family: "DM Mono" !important;
  font-weight: 500;
}
</style>
