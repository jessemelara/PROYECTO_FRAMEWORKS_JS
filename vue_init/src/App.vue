<template>
  <Header />
  <img alt="Vue logo" src="./assets/images/logo.png">
  <HelloWorld msg="Bienvenido al Master en Frameworks de JS"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
@import "./assets/css/styles.css";

</style>
