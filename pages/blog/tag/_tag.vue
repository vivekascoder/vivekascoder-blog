<template>
  <div>
    <NuxtLink :to="{ name: 'index' }" class="mb-5 hover:underline">
      &lt;&lt; Back to all articles.
    </NuxtLink>
    <h1 class="mb-14 text-5xl font-semibold">
      Posts related to <span class="text-green-600">{{ tag.name }}</span>.
    </h1>
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};

    // Fetch articles.
    const articles = await $content("articles")
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
      tag
    };
  },
  methods: {
    getPerfectDate(dateString) {
      const date = new Date(dateString);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = monthNames[date.getUTCMonth()];
      let year = date.getUTCFullYear();
      let day = date.getUTCDay();
      return `${day} ${month}, ${year}`;
    }
  }
};
</script>

<style></style>
