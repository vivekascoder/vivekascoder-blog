<template>
  <div class="p-6 bg-gray-300 rounded-sm">
    <form @submit.prevent="handleContactForm">
      <h1 class="text-4xl mb-8">Contact Me</h1>
      
      <input-text
        placeholder="John Doe"
        label="Full Name"
        :value="full_name"
        @update:value="full_name=$event"
        type="text"
      />
      {{full_name}}

      <input-text
        placeholder="john@example.com"
        label="Email"
        :value="email"
        @update:value="email=$event"
        type="email"
      />
      {{email}}

      <Textarea 
        placeholder="Hello, "
        label="Your Message"
        :value="message"
        @update:value="message=$event"
      />

      <div>
        <button class="contact__btn">Contact Now</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from '../components/form/InputText.vue'
import Textarea from '../components/form/Textarea.vue'

export default {
  layout: "ProjectLayout",
  components: {
    InputText,
    Textarea
  },
  data() {
    return {
      full_name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    handleContactForm() {
      // Handle the contact form.
    },
  },
};
</script>

<style lang="postcss" scoped>
.contact__btn {
    @apply px-6 py-2 bg-green-600 inline-block text-white;
    @apply uppercase font-semibold tracking-wider rounded-sm;
    @apply hover:bg-green-800 shadow-inner;
}
</style>