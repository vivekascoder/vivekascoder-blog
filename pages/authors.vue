<template>
  <div>
    <div class="flex flex-wrap items-center justify-center">
      <author-card v-for="author in authors" :key="author.slug" :author="author" />
      <you-can-be-author />
    </div>
  </div>
</template>

<script>
export default {
  layout: "ProjectLayout",
  async asyncData({ $content }) {
    const authors = await $content("authors")
      .sortBy('case_insensitive__name', 'asc')
      .fetch();
    return {
      authors,
    };
  },
};
</script>

<style>
</style>