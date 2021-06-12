<template>
  <div class="fixed left-0 top-0 right-0 bg-white z-50 shadow-md">
    <nav
      class="container mx-auto flex items-center justify-between py-5 text-background_alt"
    >
      <div class="flex space-x-1 text-xl items-center">
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
      </div>
      <div class="flex items-center links">
        <span class="link">
          <a href="#!">Home</a>
        </span>
        <span class="link">
          <a href="#!">Posts</a>
        </span>
        <span class="link">
          <a href="#!">Contact</a>
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
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.links .link {
  @apply px-4;
  &:hover {
    @apply underline;
  }
}
</style>
