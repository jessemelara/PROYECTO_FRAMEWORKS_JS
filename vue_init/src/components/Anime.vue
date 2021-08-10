<template>
  <article class="article-item" id="article-template">
    <div class="image-wrap">
      <img :src="anime.image" :alt="anime.title" />
    </div>
    <h2>{{ anime.title }}</h2>
    <span class="date">
      Hace 5 minutos
    </span>
    <a href="article.html">Leer más</a>
    <input
      type="button"
      value="Marcar como favorito"
      class="btn btn-star"
      @click="markAsFavorite(anime)"
    />

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Anime",
  props: ["anime"],
  methods: {
    markAsFavorite(anime) {
      this.$emit("favorite", anime);
    },
  },
};
</script>
