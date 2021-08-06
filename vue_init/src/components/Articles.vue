<template>
  <article
    class="article-item"
    id="article-template"
    v-for="article in articles"
    :key="article._id"
  >
    <div class="image-wrap">
      <img
        :src="url + 'get-image/' + article.image"
        :alt="article.title"
        v-if="article.image"
      />
      <img
        src="../assets/images/default-image.svg"
        :alt="article.title"
        v-else
      />
    </div>
    <h2>{{ article.title }}</h2>
    <span class="date">
      Hace 5 minutos
    </span>
    <a href="article.html">Leer más</a>

    <div class="clearfix"></div>
  </article>
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>
