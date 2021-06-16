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
* {
  /* font-family: 'Ubuntu', sans-serif; */
  font-family: 'Inconsolata', monospace;
}
h1, h2, h3, h4, h5 {
  font-family: 'Josefin Sans', sans-serif;
}
*::selection {
  @apply bg-gray-800 text-foreground;
}
.nuxt-content-highlight,
.nuxt-content-highlight * {
  font-family: 'DM Mono', monospace !important;
  font-weight: 500;
}
li > code, 
h1 > code,
h2 > code,
h3 > code,
h4 > code,
h5 > code,
p > code {
  @apply px-2 py-1 rounded-md bg-gray-200;
  &::after, &::before {
    display: none;
  }
}
.prose img {
  @apply shadow-md;
}
.prose iframe {
  width: 100%;
  height: 300px;
}
</style>
