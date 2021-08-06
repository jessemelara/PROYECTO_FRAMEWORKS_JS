<template>
  <div v-if="!articles" ref="divContainer">
    <h3 class="subheader">Preparando contenido</h3>
    <p>
      Espere mientras cargan los complementos. Caso contrario, intente más
      tarde.
    </p>
  </div>
  <div v-if="articles && articles.length <= 1">
    <h3 class="subheader">Sin resultados</h3>
    <p>No hay artículos para mostrar. Intente más tarde.</p>
  </div>
  <div v-if="articles && articles.length >= 1" ref="divContainer">
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
  </div>
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
      isLoading: false,
      fullPage: false,
    };
  },
  mounted() {
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.divContainer,
      fullpage: false,
      canCancel: true,
      onCancel: this.onCancel,
    });
    // simulate AJAX
    setTimeout(() => {
      loader.hide();
    }, 4000);
  },
  methods: {
    onCancel() {
      console.log("El usuario interrumpió la carga.");
    },
  },
};
</script>
