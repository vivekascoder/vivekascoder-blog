<template>
  <div class="w-full px-4 lg:w-3/5 mx-auto mt-20 flex flex-col lg:flex-row">
    <div class="w-full lg:w-4/5 space-y-20">
      <div class="">
        <h1 class="text-4xl font-semibold">{{ article.title }}</h1>
        <p class="italic py-2 text-gray-400 text-xl mb-6">
          Posted on {{ getPerfectDate(article.createdAt) }}
        </p>

        <!-- Table of contents -->
        <nav class="table mb-14">
          <h2 class="text-2xl mb-5 font-semibold">📝 Table of contents</h2>
          <ul class="table__links">
            <li
              class="table__links__link"
              :class="{
                'py-1': link.depth === 2,
                'ml-6 pb-1': link.depth === 3
              }"
              v-for="link of article.toc"
              :key="link.id"
            >
              <NuxtLink :to="`#${link.id}`">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Markdown content -->
        <nuxt-content :document="article" class="prose" />

        <!-- Tags. For suggesting similar posts. -->
        <h2 class="text-2xl mt-10">Related Topics</h2>
        <div class="mb-10">
          <Tag v-for="tag in article.tags" :key="tag" :name="tag" />
        </div>

        <!-- Next and Previous Buttons. -->
        <div class="prev-next flex items-center justify-between my-10">
          <div>
            <Btn :slug="prev.slug" v-if="prev" :title="prev.title" :left="true">
              <template v-slot:title>
                Previous
              </template>
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </template>
            </Btn>
          </div>

          <!-- Next Btn -->
          <div>
            <Btn
              :slug="next.slug"
              :title="next.title"
              v-if="next"
              :left="false"
            >
              <template v-slot:title>
                Next
              </template>
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </template>
            </Btn>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/5">
      <TagsList :tags="tags" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log("slug ", params);
    const article = await $content("articles", params.slug).fetch();
    const tags = await $content("tags").fetch();
    console.log(article);
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
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

<style lang="postcss">
/* .table {
  @apply ;
} */
.table__links {
  @apply text-xl text-green-600 list-disc ml-10;
}
.table__links__link {
  @apply cursor-pointer;
  &:hover {
    @apply underline;
  }
}
</style>
