<template>
  <Header />
  <Slider />
  <Sidebar />
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
