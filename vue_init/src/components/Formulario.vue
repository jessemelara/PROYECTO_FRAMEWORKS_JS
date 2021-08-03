<template>
  <Slider title="Formulario" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Formulario</h2>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Slider,
    Sidebar,
  },
};
</script>
