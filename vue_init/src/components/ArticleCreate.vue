<template>
  <section>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Crear Artículo</h2>

        <form class="mid-form" @submit.prevent="saveArticle">
          <div class="form-group">
            <label :for="form.article.title.$uid">Título</label>
            <input
              type="text"
              name="title"
              v-model="form.article.title.$value"
            />
            <div class="text-danger" v-if="errors.length > 0">
              <p v-for="(error, i) in form.article.title.$errors" :key="i">
                {{ error }}
              </p>
            </div>
          </div>

          <div class="form-group">
            <label :for="form.article.content.$uid">Contenido</label>
            <textarea
              name="content"
              v-model="form.article.content.$value"
            ></textarea>
            <div class="text-danger" v-if="errors.length > 0">
              <p v-for="(error, i) in form.article.content.$errors" :key="i">
                {{ error }}
              </p>
            </div>
          </div>

          <div class="form-group">
            <label :for="form.article.image.$uid">Imagen</label>
            <input type="file" name="image" />
          </div>
          <br />

          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </section>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Article from "../models/Article";

import { useValidation, ValidationError } from "vue3-form-validation";
export const required = (msg) => (x) => !x && msg;
const newLocal = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\u0020*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
export const regex = (msg) => (x) => newLocal.test(x) || msg;

export default {
  name: "ArticleCreate",
  components: {
    Sidebar,
  },
  data() {
    return {
      article: new Article("", "", ""),
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
      article: {
        title: {
          $value: "",
          $rules: [
            required("Este campo es requerido."),
            regex("Este campo solo admite letras, acentos y espacios."),
          ],
        },
        content: {
          $value: "",
          $rules: [required("Este campo es requerido.")],
        },
        image: {
          $value: "",
        },
      },
    });

    async function saveArticle() {
      try {
        const formData = await validateFields();
        console.log(formData);
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
        }
      }
    }

    return {
      form,
      errors,
      submitting,
      resetFields,
      saveArticle,
    };
  },
};
</script>
