<template>
  <Slider :title="'Búsqueda: ' + txtSearch" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Resultados de búsqueda</h2>
      <Articles :articles="articles" />
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar";
import Articles from "./Articles.vue";
import Global from "../Global";
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      url: Global.url,
      articles: [],
      txtSearch: null,
    };
  },
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  mounted() {
    this.txtSearch = this.$route.params.txtSearch;
    this.search(this.txtSearch);
  },
  methods: {
    search(txtSearch) {
      axios.get(`${this.url}search/${txtSearch}`).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }

        console.log(res.data);
      });
    },
  },
};
</script>
