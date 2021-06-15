<template>
  <div>
    <Navbar />
    <div class="h-20"></div>
    <Newsletter />
    <div class="w-full px-4 lg:w-3/5 mx-auto mt-20 flex flex-col lg:flex-row">
      <div class="w-full lg:w-4/5 space-y-20">
        <Nuxt/>
      </div>
      <div class="w-full lg:w-1/5">
        <TagsList :tags="$store.state.tags" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,500;1,500&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
}
*::selection {
  @apply bg-gray-800 text-foreground;
}
.nuxt-content-highlight,
.nuxt-content-highlight * {
  font-family: 'DM Mono', monospace !important;
  font-weight: 500;
}
</style>
