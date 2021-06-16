<template>
  <div>
    <Navbar />
    <div class="h-20"></div>
    <Newsletter />
    <div class="w-full px-4 lg:w-3/5 mx-auto mt-20 flex flex-col lg:flex-row">
      <div class="w-full lg:w-4/5 space-y-20">
        <Nuxt/>
      </div>
      <div class="w-full lg:w-1/5">
        <h2 class="text-2xl mb-10">☎️ Contact</h2>
        <ul class="contact-links">
          <li class="contact-links__link"
            v-for="link in getContact"
            :key="link.type"
          >
            <a :href="link.link">🔗 {{link.type}}</a>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="postcss">
* {
  /* font-family: 'Ubuntu', sans-serif; */
  font-family: 'Inconsolata', monospace;
}
h1, h2, h3, h4, h5 {
  font-family: 'Josefin Sans', sans-serif;
}
*::selection {
  @apply bg-gray-800 text-foreground;
}
.nuxt-content-highlight,
.nuxt-content-highlight * {
  font-family: 'DM Mono', monospace !important;
  font-weight: 500;
}
.contact-links {
  @apply space-y-4;
}
.contact-links__link a {
  @apply relative inline-block capitalize text-lg;
}
</style>

<script>
export default {
  computed: {
    getContact() {
      let data = []
      const about = this.$store.state.about
      Object.keys(about.contact).forEach((key) => {
        data.push({
          type: key,
          link: about.contact[key]
        })
      })
      return data
    }
  }
}
</script>