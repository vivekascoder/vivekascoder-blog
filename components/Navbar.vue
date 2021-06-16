<template>
  <div class="fixed left-0 top-0 right-0 bg-white z-50 shadow-md">
    <nav
      class="relative container mx-auto flex items-center justify-between py-5 text-background_alt"
    >
      <NuxtLink :to="{name: 'index'}" class="flex space-x-1 text-xl items-center px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-semibold uppercase">vivekascoder</span>
      </NuxtLink>
      <svg xmlns="http://www.w3.org/2000/svg" class="md:hidden h-6 w-6 box-content p-2 cursor-pointer hover:bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="toggleMenu()">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <div class="hidden md:flex items-center links">
        <span 
          class="link"
          v-for="link in links"
          :key="link.id"
        >
          <a href="#!">{{link.name}}</a>
        </span>
        <span class="pr-4 pl-2">|</span>
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </div>
      <div v-if="showMenu" class="sm:flex md:hidden flex-col absolute top-full left-0 right-0 bg-white shadow-md md:shadow-none lg:static lg:flex-row items-center links">
        <span 
          v-for="link in links"
          :key="link.id"
          class="link text-center w-full md:w-auto"
        >
          <NuxtLink 
            class="py-3 hover:bg-gray-700 hover:text-white text-lg block"
            :to="{name: link.path}">{{link.name}}</NuxtLink>
        </span>
        <span class="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 box-content p-3 rounded-full hover:bg-gray-200 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      links: [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Contact',
          path: '/'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
};
</script>

<style lang="postcss" scoped>
.links .link {
  @apply px-4;
  &:hover {
    @apply underline;
  }
}
</style>
