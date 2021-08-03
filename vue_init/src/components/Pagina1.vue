<template>
  <Slider title="Párametros en la URL" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Página 1: Párametros en la URL</h2>
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
        <button @click="notFoundPage()" class="btn btn-danger">
          Página Error
        </button>
      </div>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Pagina1",
  components: {
    Slider,
    Sidebar,
  },
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
