<template>
  <div class="space-y-20 md:mr-10">
    <project-card 
      v-for="project in projects"
      :key="project.slug"
      :title="project.title"
      :description="project.description"
      :imageUrl="project.image"
      :githubUrl="project.github"
      :liveUrl="project.live"
      :achievement="project.achievement"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setLinks', 'Projects')
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      projects
    }
  }
}
</script>

<style>

</style>