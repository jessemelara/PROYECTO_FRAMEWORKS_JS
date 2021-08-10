<template>
  <Slider title="Bienvenido al Master en VueJS" size="slider-big" home="true" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>
      <Articles v-bind:articles="articles" />
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";
import Global from "../Global";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  data() {
    return {
      url: Global.url,
      articles: [],
    };
  },
  mounted() {
    this.getLastArticle();
  },
  methods: {
    getLastArticle() {
      axios.get(Global.url + "articles/last").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }

        console.log(res.data);
      });
    },
  },
};
</script>
