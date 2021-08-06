<template>
  <Slider title="Blog" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Blog</h2>

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
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";

import axios from "axios";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
  },
  mounted() {
    this.getArticle();
  },
  data() {
    return {
      url: Global.url,
      articles: [],
    };
  },
  methods: {
    getArticle() {
      axios.get(Global.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }

        console.log(res.data);
      });
    },
  },
};
</script>
