<template>
  <Header />
  <Slider />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos Artículos</h2>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Slider,
    Sidebar,
    Footer,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
