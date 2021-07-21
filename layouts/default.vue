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
  /* Remove the blue highlighting in mobile devices. */
  -webkit-tap-highlight-color: transparent;
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
  @apply text-xs;
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
.prose blockquote {
  @apply bg-green-200;
  @apply border-l-4 border-green-700;
}
.prose blockquote > p {
  @apply not-italic py-8;
  @apply bg-green-200 text-green-800;
  &::after, &::before {
    @apply hidden;
  }
}
.prose blockquote > p > code {
  @apply bg-green-300 text-green-900;
}
.prose img {
  @apply shadow-md;
}
.prose iframe {
  width: 100%;
  height: 300px;
}
</style>
