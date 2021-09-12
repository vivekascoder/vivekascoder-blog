<template>
  <div class="flex items-center justify-between space-x-2 my-3">
    <div class="flex items-center space-x-2">
      <img
        :src="author.img"
        :alt="author.name"
        class="w-6 h-6 rounded-full bg-gray-200"
      />
      <div class="flex-1">
        <h1 class="text-sm font-medium mb-0 text-gray-500">
          By
          <span class="border-b-2 border-dashed border-gray-300 cursor-pointer">
            {{ author.name }}
          </span>
        </h1>
      </div>
    </div>
    <div>
      <p class="font-medium text-gray-400 text-sm">{{time}}</p>
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
    time: {
      type: Number,
      required: true,
    }
  },
};
</script>