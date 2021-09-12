<template>
  <NuxtLink
    :to="`/blog/tag/${tag.slug}`"
    class="tag"
  >
    {{tag.name}}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.tag {
  @apply px-3 font-semibold py-1 text-xs text-gray-700 inline-block;
  @apply border-2 border-gray-700 rounded-sm;
  @apply transition duration-100 ease-in-out;
  /* Spacing Goes Now */
  @apply my-1 mx-1;

  /* Hover styling. */
  &:hover {
    @apply bg-gray-700 text-white cursor-pointer;
  }
}
</style>