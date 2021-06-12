<template>
  <div class="">
    <h1 class="text-3xl font-medium">
      {{title}}
    </h1>
    <!-- Date Format: 23 April, 2020 -->
    <p class="italic py-2 text-gray-400 text-xl">Posted on {{date}} </p>
    <!-- Some Demo Content -->
    <p class="mr-40">
      {{description}}
    </p>
    <ReadMoreBtn :url="slug" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      require: true
    },
    slug: {
      type: String,
      require: true
    }
  }
};
</script>

<style></style>
