<template>
  <NuxtLink 
    class="btn"
    :to="{name: 'blog-slug', params: {slug: url}}"
  >
    <span class="text-xs font-semibold">Read More</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply inline-flex items-center space-x-2 px-4 py-1.5 border-2 border-gray-700 mt-4 transition duration-75;
  @apply uppercase text-sm;
}
.btn:hover {
  @apply bg-gray-700 text-white;
}
</style>