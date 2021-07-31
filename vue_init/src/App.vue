<template>
  <div id="app">
    <Header />
    <Slider />
    <div class="center">
      <section id="content">
        <router-view></router-view>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
    <Footer />
  </div>
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
