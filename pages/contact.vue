<template>
  <div class=" rounded-sm shadow-md max-w-lg mx-auto overflow-hidden">
    <div class=" bg-green-600 text-white p-4" aria-label="Header for the form.">
      <h1 class="text-2xl font-bold text-center uppercase">Contact Me</h1>
    </div>
    <form @submit.prevent="handleContactForm" class="p-6">
      
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
  mounted() {
    this.$store.commit('setLinks', 'Contact');
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