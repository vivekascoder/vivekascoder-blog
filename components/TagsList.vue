<template>
  <div>
    <h2 class="text-xl mb-2 font-semibold">Tags</h2>
    <Tag 
      v-for="tag in tags"
      :key="tag.slug"
      :tag="tag" 
      :title="tag.description"
    />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>

</style>