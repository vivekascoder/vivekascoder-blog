<template>
  <div class="projects">
    <div class="projects__header">
      <img src="/projects_background.png" alt="top-projects" class="projects__header__image">
      <p class="projects__header__title">Today's Top Repos</p>
    </div>
    <div class="projects__list">
      <div v-for="project in projects" :key="project.id" class="projects__list__item">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <p>
          {{project.name}}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
      </div>
    </div>
    <div class="projects__info">
      <button class="projects__info__more-btn">View All</button>
    </div>
  </div>
</template>

<script>
const projects = [
  {id: 1, name: 'Vite-Vue-Template', link: 'https://github.com/vivekascoder/vite-vue-tailwind-jit'},
  {id: 2, name: 'Rimoto', link: 'https://github.com/vivekascoder/rimoto'},
  {id: 2, name: 'My Blog', link: 'https://github.com/vivekascoder/vivekascoder-blog'}
]
export default {
  name: 'TopProjects',
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="postcss" scoped>
.projects {
  @apply overflow-hidden rounded-sm bg-white;
}
.projects__header {
  @apply relative;
}
.projects__header__title {
  @apply absolute bottom-2 left-4 font-semibold text-white text-lg;
}
.projects__header__image {
  @apply object-cover h-20 w-full;
}
.projects__list {
  @apply divide-y-2 divide-gray-100;
}
.projects__list__item {
  @apply px-6 py-4 font-medium flex items-center space-x-1;
}
.projects__list__item p {
  @apply text-sm text-gray-600 pl-2;
}
.projects__info {
  @apply px-3 py-2 mb-3;
}
.projects__info__more-btn {
  @apply rounded-full w-full bg-blue-500 py-2 font-semibold text-xs uppercase tracking-wider text-white focus:outline-none hover:bg-blue-600 focus:ring-2 ring-opacity-30 ring-blue-600;
}
</style>