<template>
  <Slider title="Formulario" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Formulario</h2>

      <form class="mid-form" @submit.prevent="showUser()">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" v-model="user.nombre" />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido</label>
          <input type="text" name="apellido" v-model="user.apellido" />
        </div>
        <div class="form-group">
          <label for="bio">Biografia</label>
          <textarea name="bio" v-model="user.bio"></textarea>
        </div>
        <div class="form-group radio-buttons">
          <input
            type="radio"
            name="genero"
            value="Hombre"
            v-model="user.genero"
          />
          Hombre<br />
          <input
            type="radio"
            name="genero"
            value="Mujer"
            v-model="user.genero"
          />
          Mujer<br />
          <input
            type="radio"
            name="genero"
            value="No especificar"
            v-model="user.genero"
          />
          No especificar
        </div>
        <div class="clearfix"></div>
        <input type="submit" value="Enviar" class="btn btn-success" />
      </form>
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
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    showUser() {
      console.log(this.user);
    },
  },
};
</script>
