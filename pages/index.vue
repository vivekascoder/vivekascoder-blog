<template>
  <div class="space-y-4">
    <search-box />
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
  mounted() {
    this.$store.commit('setLinks', 'Home')
  },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles,
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
