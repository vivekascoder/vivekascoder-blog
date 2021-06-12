<template>
    <div class="space-y-20">
      <Post
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :date="article.date"
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
  }
}
</script>

<style>
</style>
