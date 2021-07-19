<template>
  <div class="flex items-center p-3 space-x-4 my-3">
    <img
      :src="author.img"
      :alt="author.name"
      class="w-12 h-12 rounded-full bg-gray-200"
    />
    <div class="flex-1">
      <h1 class="text-xl font-semibold mb-0">
        By
        <span class="border-b-2 border-dashed border-gray-500 cursor-pointer">
          {{ author.name }}
        </span>
      </h1>
      <p class="text-gray-700">
        <a :href="author.twitter"> Connect with <span class="font-semibold">@{{author.slug}}</span> </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>