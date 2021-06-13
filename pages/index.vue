<template>
    <div class="space-y-20">
      <Post
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :date="getPerfectDate(article.createdAt)"
        :description="article.description"
        :slug="article.slug"
      />
    </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const articles = await $content('articles').fetch()
    console.log(articles);
    return {
      articles
    }
  },
  methods: {
    getPerfectDate(dateString) {
      const date = new Date(dateString)
      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      let month = monthNames[date.getUTCMonth()]
      let year = date.getUTCFullYear()
      let day = date.getUTCDay()
      return `${day} ${month}, ${year}`
    }
  }
}
</script>

<style>
</style>
