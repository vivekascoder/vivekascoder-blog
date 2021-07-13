<template>
  <!-- Input Box -->
  <div class="mb-6">
    <!-- Input Label -->
    <div class="mb-2">
      <label class="text-gray-600 text-lg">{{label}}:</label>
    </div>
    <div>
      <textarea
        v-bind="$attrs"
        class="
          w-full
          p-2
          border-2 border-gray-600
          focus:outline-none
          focus:ring-4 focus:ring-gray-500 focus:ring-opacity-30
          transition-all
          duration-150
          ease-in-out
          rounded-sm
          h-40
        "
        type="text"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>