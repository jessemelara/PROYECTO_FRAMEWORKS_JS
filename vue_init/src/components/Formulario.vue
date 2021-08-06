<template>
  <Slider title="Formulario" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Formulario</h2>

      <form class="mid-form" @submit.prevent="showUser()">
        <div class="form-group">
          <label :for="form.user.nombre.$uid">Nombre</label>
          <input type="text" name="nombre" v-model="form.user.nombre.$value" />
          <div class="text-danger" v-if="errors.length > 0">
            <p v-for="(error, i) in form.user.nombre.$errors" :key="i">
              {{ error }}
            </p>
          </div>
        </div>

        <div class="form-group">
          <label :for="form.user.apellido.$uid">Apellido</label>
          <input
            type="text"
            name="apellido"
            v-model="form.user.apellido.$value"
          />
          <div class="text-danger" v-if="errors.length > 0">
            <p v-for="(error, i) in form.user.apellido.$errors" :key="i">
              {{ error }}
            </p>
          </div>
        </div>

        <div class="form-group">
          <label :for="form.user.bio.$uid">Biografia</label>
          <textarea name="bio" v-model="form.user.bio.$value"></textarea>
          <div class="text-danger" v-if="errors.length > 0">
            <p v-for="(error, i) in form.user.bio.$errors" :key="i">
              {{ error }}
            </p>
          </div>
        </div>

        <div class="form-group radio-buttons">
          <input
            type="radio"
            name="genero"
            value="Hombre"
            v-model="form.user.genero.$value"
          />
          Hombre<br />
          <input
            type="radio"
            name="genero"
            value="Mujer"
            v-model="form.user.genero.$value"
          />
          Mujer<br />
          <input
            type="radio"
            name="genero"
            value="No especificar"
            v-model="form.user.genero.$value"
          />
          No especificar

          <div class="text-danger" v-if="errors.length > 0">
            <p v-for="(error, i) in form.user.genero.$errors" :key="i">
              {{ error }}
            </p>
          </div>
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
import { useValidation, ValidationError } from "vue3-form-validation";
export const required = (msg) => (x) => !x && msg;
export const min = (min) => (msg) => (x) => x.length >= min || msg;
export const regex = (msg) => (x) =>
  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\u0020*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
    x
  ) || msg;

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
  setup() {
    const {
      form,
      errors,
      submitting,
      validateFields,
      resetFields,
    } = useValidation({
      user: {
        nombre: {
          $value: "",
          $rules: [
            required("Este campo es requerido."),
            regex("Este campo solo admite letras, acentos y espacios."),
          ],
        },
        apellido: {
          $value: "",
          $rules: [
            required("Este campo es requerido."),
            regex("Este campo solo admite letras, acentos y espacios."),
          ],
        },
        bio: {
          $value: "",
          $rules: [
            required("Este campo es requerido."),
            min(10)("Este campo debe contener un mínimo de 10 caracteres."),
          ],
        },
        genero: {
          $value: "",
          $rules: [required("Este campo es requerido.")],
        },
      },
    });

    const showUser = async () => {
      try {
        const formData = await validateFields();
        console.log(formData);
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
        }
      }
    };

    return {
      form,
      errors,
      submitting,
      resetFields,
      showUser,
    };
  },
};
</script>
