<template>
  <span>
    {{name}}
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
span {
  @apply px-3 py-1 text-sm text-gray-700 inline-block;
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