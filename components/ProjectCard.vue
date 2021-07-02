<template>
  <div class="card">
    <div class="card__image overflow-hidden">
      <img src="/libman.png" class="object-cover h-96 w-full">
    </div>
    <div class="card__content">
      <div class="card__title">
        <h1 class="text-4xl mb-3 text-center md:text-left">Awesome Project</h1>
      </div>
      <div class="card__desc text-center md:text-left mr-0 md:mr-10 lg:mr-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          veritatis aliquam fugiat quos enim autem nemo eius ullam quia nam a ad
          minima, soluta aut optio in placeat quo. Mollitia!
        </p>
      </div>
      <div class="card__action space-x-4 mt-6">
        <a href="#!" class="card__btn">Github</a>
        <a href="#!" class="card__btn">Live Demo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    github: {
      type: String,
      required: true
    },
    
  }
};
</script>

<style lang="postcss">
.card {
  @apply rounded-md shadow-md overflow-hidden;
}
.card__content {
  @apply p-6;
}
.card__btn {
  @apply relative;
  @apply px-6 py-2 bg-green-600 inline-block text-white;
  @apply uppercase font-semibold tracking-wider rounded-sm;
  @apply hover:bg-green-800 shadow-inner;
}
</style>
