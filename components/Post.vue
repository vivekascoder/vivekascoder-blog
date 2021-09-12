 <template>
  <div class="post-wrapper">
    <p class="text-gray-400 text-xs">Posted on {{date}} </p>
    <h1 class="text-2xl font-semibold text-gray-800">
      {{title}}
    </h1>
    <!-- Date Format: 23 April, 2020 -->
    <!-- Some Demo Content -->
    <p class="text-sm leading-relaxed mt-2 text-gray-700">
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

<style lang='postcss' scoped>
.post-wrapper {
  @apply rounded-sm py-4 px-6 bg-white border-2 border-gray-100 hover:border-gray-200;
}
</style>
