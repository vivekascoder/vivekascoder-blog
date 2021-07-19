<template>
  <div class="w-72 h-96 bg-black rounded-md overflow-hidden shadow-md relative m-4">
    <img :src="author.img" class="w-full h-full object-cover" />
    <div class="absolute bottom-0 left-0 right-0 bg-white m-2 rounded-md">
      <div class="relative p-2">
        <span class="text-xs px-3 py-1 bg-red-700 font-semibold tracking-widest rounded-full text-white absolute top-0 transform -translate-y-full right-0 -mt-2">NEWLY</span>
        <h1 class="text-lg font-semibold text-gray-900 mb-2 text-center">
          {{author.name}}
        </h1>
        <p class="text-sm text-gray-600 text-center mt-3">
          {{author.about}}
        </p>
        <a :href="author.github" class="text-xs uppercase mt-3 mb-3 font-semibold tracking-widest bg-blue-500 px-6 py-2 rounded-full text-white float-right border-b-4 border-blue-700 hover:border-b-0">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('Author: ', this.author)
  }
};
</script>

<style>
</style>