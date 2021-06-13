<template>
  <NuxtLink 
    class="btn"
    :to="{name: 'blog-slug', params: {slug: url}}"
  >
    <span>Read More</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  @apply inline-flex space-x-2 px-6 py-2 border-2 border-gray-700 mt-10 transition duration-200 ease-in-out;
}
.btn:hover {
  filter: drop-shadow(2px 3px 10px rgba(0,0,0,0.3));
  @apply bg-gray-700 text-white;
}
</style>