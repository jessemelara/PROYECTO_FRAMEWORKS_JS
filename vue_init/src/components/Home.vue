<template>
  <Slider title="Bienvenido al Master en VueJS" size="slider-big" home="true" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Home",
  components: {
    Slider,
    Sidebar,
  },
};
</script>
