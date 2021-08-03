<template>
  <div id="slider" :class="size">
    <h1>{{ title }}</h1>
    <router-link to="/blog" class="btn-white" v-if="home"
      >Ir al blog</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["title", "size", "home"],
};
</script>
