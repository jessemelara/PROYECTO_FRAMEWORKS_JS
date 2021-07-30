<template>
  <Header />
  <Slider />
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slider
  }
}
</script>

<style>
@import "./assets/css/styles.css";

</style>
