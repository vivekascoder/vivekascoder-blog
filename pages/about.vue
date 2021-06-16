<template>
  <div>
    <nuxt-content :document="about" class="prose" />
  </div>
</template>

<script>
export default {
  layout: 'aboutlayout',
  async asyncData({$content}) {
    const about = await $content('about/about').fetch()
    console.log(about);
    return {
      about
    }
  }
}
</script>

<style>

</style>