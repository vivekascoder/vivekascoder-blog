<template>
  <!-- Input Box -->
  <div class="mb-6">
    <!-- Input Label -->
    <div class="mb-2">
      <label class="text-gray-600 text-lg">{{label}}:</label>
    </div>
    <div>
      <!-- <input
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
        "
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      /> -->
      <input
        v-bind="$attrs"
        class="
        form-input
        w-full
        "
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      />
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