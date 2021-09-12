<template>
  <div>
    <Navbar />
    <!-- <div class="h-20"></div> -->
    <!-- <Newsletter /> -->
    <div class="w-full px-4 max-w-5xl mx-auto mt-20 flex flex-col items-start justify-between lg:flex-row md:space-x-4">
      <div class="w-full lg:w-8/12 space-y-20">
        <Nuxt/>
      </div>
      <div class="w-full lg:w-4/12 space-y-3">
        <top-projects />
        <TagsList :tags="$store.state.tags" />
        <donate />
      </div>
    </div>
    <Footer />
  </div>
</template>

