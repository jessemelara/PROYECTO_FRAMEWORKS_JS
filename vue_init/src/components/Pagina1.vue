<template>
  <h1 class="subheader">Página 1: Párametros en la URL</h1>
  <p v-if="!nombre && !apellido" style="font-size: 20px;">
    No se encuentran páramatros para mostrar
  </p>
  <p v-if="nombre || apellido" style="font-size: 20px;">
    Su nombre es: <em>{{ nombre }} {{ apellido }}</em>
  </p>
  <div class="btnParams">
    <router-link to="/pagina1/Jesse/Melara" class="btn"
      >Nombre y apellidos</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Pagina1",
  mounted() {
    this.nombre = this.$route.params.nombre;
    this.apellido = this.$route.params.apellido;
  },
  updated() {
    this.nombre = this.$route.params.nombre;
    this.apellido = this.$route.params.apellido;
  },
  data() {
    return {
      nombre: null,
      apellido: null,
    };
  },
};
</script>
