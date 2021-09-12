<template>
  <div class="bg-white rounded-md overflow-hidden group focus-within:ring-2 ring-offset-1 ring-gray-600 ring-offset-background mb-2">
    <div class="flex items-center">
      <span class="px-3 uppercase font-semibold text-xs">Search Article:</span>
      <input class="searchBox" type="text" />
      <!-- <button>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style lang="postcss" scoped>
.searchBox {
  @apply focus:outline-none;
  @apply border-gray-100 focus:border-gray-200 text-sm px-3 py-3 flex-1  font-medium;
}
</style>