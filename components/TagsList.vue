<template>
  <div>
    <h2 class="text-xl mb-2 font-semibold">Tags</h2>
    <Tag 
      v-for="tag in tags"
      :key="tag"
      :name="tag.name" 
      :title="tag.description"
    />
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     tags: () => {[]}
  //   }
  // },
  async asyncData({ $content}) {
    const tags = await $content('tags').fetch()
    console.log(tags);
    return {
      tags
    }
  }
}
</script>

<style>

</style>