<template>
  <Slider title="Blog" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Blog</h2>
      <Articles :articles="articles" />
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
  name: "Blog",
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
    this.getArticle();
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
