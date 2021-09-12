<template>
  <NuxtLink 
    class="btn"
    :to="{name: 'blog-slug', params: {slug: slug}}"
  >
    <span>
      <slot :name="left ? 'icon' : 'title'">
      </slot>
    </span>
    <slot :name="left ? 'title' : 'icon'">
    </slot>
  </NuxtLink>
</template>

<script>
export default {
props: {
  slug: {
    type: String,
    required: true
  },
  left: {
    type: Boolean,
    required: true
  }
}
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply inline-flex space-x-2 px-6 py-2 border-2 border-gray-700 mt-10 transition duration-200 ease-in-out;
  @apply uppercase;
}
.btn:hover {
  /* filter: drop-shadow(2px 3px 10px rgba(0,0,0,0.3)); */
  @apply bg-gray-700 text-white;
}
</style>