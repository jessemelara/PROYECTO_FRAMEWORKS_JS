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
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar
  }
}
</script>

<style>
@import "./assets/css/styles.css";

</style>
