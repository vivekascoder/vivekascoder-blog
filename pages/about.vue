<template>
  <div>
    <nuxt-content :document="about" class="prose" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setLinks', 'About')
  },
  layout: 'aboutlayout',
  async asyncData({$content}) {
    const about = await $content('about/about').fetch()
    return {
      about
    }
  }
}
</script>

<style>

</style>