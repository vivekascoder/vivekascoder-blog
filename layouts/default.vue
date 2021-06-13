<template>
  <div>
    <Navbar/>
    <div class="h-20"></div>
    <Newsletter/>
      <div class="w-full px-4 lg:w-3/5 mx-auto mt-20 flex flex-col lg:flex-row">
      <div class="w-full lg:w-4/5 space-y-20">
        <Nuxt />
      </div>
      <div class="w-full lg:w-1/5">
        <h2 class="text-xl mb-2 font-semibold">Tags</h2>
        <Tag name="Python" />
        <Tag name="Javascript" />
        <Tag name="NginX" />
        <Tag name="Server" />
        <Tag name="Vue" />
        <Tag name="Django" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style lang="postcss">
* {
  font-family: 'Ubuntu';
}
*::selection {
  @apply bg-gray-800 text-foreground;
}
.nuxt-content-highlight, .nuxt-content-highlight  * {
  font-family: 'DM Mono' !important;
  font-weight: 500;
}
</style>
