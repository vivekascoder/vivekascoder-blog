<template>
  <div class="w-full px-4 lg:w-3/5 mx-auto mt-20 flex flex-col lg:flex-row">
    <div class="w-full lg:w-4/5 space-y-20">
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
    <div class="w-full lg:w-1/5">
      <TagsList :tags="tags" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles").fetch();
    const tags = await $content("tags").fetch();
    return {
      articles,
      tags
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
