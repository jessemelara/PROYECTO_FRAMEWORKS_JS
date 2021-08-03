<template>
  <h1 class="subheader">Página 1: Párametros en la URL</h1>
  <div v-if="!nombre && !apellido">
    <p style="font-size: 20px;">
      No se encuentran páramatros para mostrar
    </p>

    <input type="text" v-model="nombres" />
    <p v-if="nombres" style="font-size: 20px;">
      Su nombre es: <em>{{ nombres }}</em>
    </p>
  </div>

  <p v-if="nombre || apellido" style="font-size: 20px;">
    Su nombre es: <em>{{ nombre }} {{ apellido }}</em>
  </p>

  <div class="btnParams">
    <router-link to="/pagina1/Jesse/Melara" class="btn"
      >Nombre y apellidos</router-link
    >
  </div>
  <div class="clearfix"></div>
  <div class="btnParams">
    <button @click="notFoundPage()" class="btn btn-danger">Página Error</button>
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
      nombres: "",
    };
  },
  methods: {
    notFoundPage() {
      this.$router.push({
        name: "NotFound",
        params: { pathMatch: "not-found" },
      });
    },
  },
};
</script>
