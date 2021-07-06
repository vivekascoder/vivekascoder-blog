<template>
  <div
    class="nav-wrapper"
  >
    <nav
      class="nav"
    >
    <!-- Blog's Title -->
      <nuxt-link class="nav__title" to="/">
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
        <span class="font-semibold uppercase text-xl md:text-2xl">vivekascoder</span>
      </nuxt-link>
      <div class="nav__links">
        <div
          class="nav__links__wrapper"
        >
          <nuxt-link
            v-for="link in $store.state.links"
            :key="link.id"
            :to="link.path"
            class="nav__link"
            :class="{'active': link.active}"
          >
          {{link.name}}
          </nuxt-link>
        </div>

        <!-- Youtube Btn -->
        <a
          href="https://www.youtube.com/channel/UC1uPwKU2VB9d1COLsyT4_GA"
          class="btn__yt"
        >
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
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="btn__yt__title">Watch</span>
        </a>
        <!-- Mobile Nav toggler Button -->
        <span
          class="btn__mobile-nav"
          @click="toggleMenu()"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </span>
      </div>
    </nav>
    <!-- Mobile Navbar... -->
    <div
      class="nav__mobile flex md:hidden"
      :class="{'hidden': !showMenu}"
    >
      <nuxt-link
        v-for="link in $store.state.links"
        :key="link.id"
        :to="link.path"
        class="nav__mobile__link"
      >
        {{link.name}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="postcss" scoped>
.nav-wrapper {
  @apply border-b-2 border-gray-200 shadow-sm fixed bg-white top-0 left-0 right-0 h-16 z-50;
}
.nav {
  @apply flex items-center justify-between container mx-auto relative h-full px-4;
}
.nav__title {
  @apply flex items-center space-x-1;
}
.nav__links {
  @apply flex space-x-4 items-center h-full;
}
.nav__links__wrapper {
  @apply hidden md:space-x-4 md:items-center z-40 md:flex;
}
.nav__link {
  @apply my-1 px-4 py-4 text-center md:text-left md:py-1 hover:bg-gray-800 hover:text-white cursor-pointer md:rounded-full transition duration-100 ease-in-out block;
}
.active {
  @apply bg-gray-800 text-white;
}
.btn__yt {
  @apply flex bg-red-500 items-center text-white px-6 py-2 rounded-full space-x-2 hover:bg-red-600 transition duration-100 ease-in-out;
}
.btn__yt__title {
  @apply font-semibold uppercase text-xs tracking-wider;
}
.btn__mobile-nav {
  @apply static md:hidden bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-800 hover:text-gray-200 transition duration-100 ease-in-out;
}
.nav__mobile {
  @apply absolute top-full bg-white flex-col left-0 right-0 shadow-lg border-b-4 border-green-600 rounded-b-lg z-40;
}
.nav__mobile__link {
  @apply my-1 px-4 py-4 text-center hover:bg-gray-800 hover:text-white cursor-pointer transition duration-100 ease-in-out block;
}
</style>
