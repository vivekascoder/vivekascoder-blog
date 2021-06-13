<template>
  <div>
    <h1 class="text-4xl font-semibold">{{ article.title }}</h1>

    <nuxt-content :document="article" class="prose" />
    <div class="prev-next flex items-center justify-between my-10">
      <div>
        <Btn 
          :slug="prev.slug"
          v-if="prev"
          left
        >
        <template v-slot:title>
          Previous
        </template>
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </template>
      </Btn>
      </div>

      <!-- Next Btn -->
      <div>
        <Btn 
          :slug="next.slug"
          v-if="next"
        >
          <template v-slot:title>
            Next
          </template>
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </template>
        </Btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    console.log('slug ', params)
    const article = await $content('articles', params.slug).fetch()
    console.log(params.slug);
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    
    return {
      article,
      prev,
      next
    }
  }
}
</script>

<style>

</style>