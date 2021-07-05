<template>
  <div
    class="border-b-2 border-gray-200 shadow-sm fixed bg-white top-0 left-0 right-0 h-16 z-50"
  >
    <nav
      class="flex items-center justify-between container mx-auto relative h-full px-4"
    >
      <div class="flex items-center space-x-1">
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
        <span class="font-semibold uppercase text-2xl">vivekascoder</span>
      </div>
      <div class="flex space-x-4 items-center h-full">
        <div
          class="flex md:space-x-4 md:items-center absolute md:static top-full bg-white md:bg-transparent flex-col md:flex-row left-0 right-0 md:mt-0 shadow-lg md:shadow-none md:border-none border-b-4 border-green-600 rounded-b-lg z-40"
          :class="{'hidden md:static': showMenu}"
        >
          <span
            class="my-1 px-4 py-4 text-center md:text-left md:py-1 hover:bg-gray-800 hover:text-white cursor-pointer md:rounded-full transition duration-100 ease-in-out block "
            >Home</span
          >
          <span
            class="my-1 px-4 py-4 text-center md:text-left md:py-1 hover:bg-gray-800 hover:text-white cursor-pointer md:rounded-full transition duration-100 ease-in-out block "
            >Projects</span
          >
          <span
            class="my-1 px-4 py-4 text-center md:text-left md:py-1 hover:bg-gray-800 hover:text-white cursor-pointer md:rounded-full transition duration-100 ease-in-out block "
            >About Me</span
          >
          <span
            class="my-1 px-4 py-4 text-center md:text-left md:py-1 hover:bg-gray-800 hover:text-white cursor-pointer md:rounded-full transition duration-100 ease-in-out block "
            >Contact</span
          >
        </div>

        <!-- Youtube Btn -->
        <a
          href="#!"
          class="flex bg-red-500 items-center text-white px-6 py-2 rounded-full space-x-2 hover:bg-red-600 transition duration-100 ease-in-out"
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
          <span class="font-semibold uppercase text-xs tracking-wider">Watch</span>
        </a>
        <span
          class="static md:hidden bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-800 hover:text-gray-200 transition duration-100 ease-in-out"
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
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
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
