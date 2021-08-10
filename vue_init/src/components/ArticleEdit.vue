<template>
  <section>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Editar Artículo</h2>

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
            <label for="image">Imagen</label>
            <input
              type="file"
              id="image"
              name="file"
              ref="file"
              @change="onFileChange"
            />
            <div class="image-wrap">
              <img
                :src="pathImage"
                :alt="pathImage"
                style="width:250px; height:115px; margin:5px;"
                v-if="pathImage"
              />
              <img
                :src="url + 'get-image/' + imageName"
                :alt="form.article.title.$value"
                style="width:250px; height:115px; margin:5px;"
                v-else-if="imageName"
              />
              <img
                src="../assets/images/default-image.svg"
                :alt="form.article.title.$value"
                style="width:250px; height:115px; margin:5px;"
                v-else
              />
            </div>
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
import Global from "../Global";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useValidation, ValidationError } from "vue3-form-validation";
export const required = (msg) => (x) => !x && msg;
const newLocal = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\u0020*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
export const regex = (msg) => (x) => newLocal.test(x) || msg;

export default {
  name: "ArticleCreate",
  components: {
    Sidebar,
  },
  props: {
    id: String,
    imageName: String,
  },
  data() {
    return {
      pathImage: null,
    };
  },
  methods: {
    onFileChange(e) {
      const fileRoot = e.target.files[0];
      this.pathImage = URL.createObjectURL(fileRoot);
      console.log(this.pathImage);
      this.fileChange();
    },
  },
  setup(props) {
    const url = Global.url;
    const file = ref(null);
    let article = null;
    let image = null;
    const route = useRoute();
    const router = useRouter();
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
      },
    });

    onMounted(() => {
      let articleId = route.params.id;
      getArticle(articleId);
    });

    async function getArticle(articleId) {
      try {
        axios
          .get(`${url}article/${articleId}`)
          .then((res) => {
            if (res.data.status == "success") {
              article = res.data.article;
              form.article.title.$value = article.title;
              form.article.content.$value = article.content;
            }
            console.log(res.data);
          })
          .catch(function(error) {
            if (error.response) {
              console.log(error.response.data);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
        }
      }
    }

    async function fileChange() {
      try {
        image = file.value.files[0];
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
        }
      }
    }

    async function saveArticle() {
      try {
        const formData = await validateFields();
        console.log(formData);

        Swal.fire({
          title: "¿Quieres guardar este nuevo artículo?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Guardar`,
          denyButtonText: `No Guardar`,
          cancelButtonText: `Cancelar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            //Guardar datos en el Backend
            axios
              .put(`${url}article/${props.id}`, formData.article)
              .then((res) => {
                console.log(res.data);
                if (res.data.status == "success") {
                  if (image != null && image != undefined && image != "") {
                    //Subida de imagen
                    const imageData = new FormData();
                    imageData.append("file0", image, image.name);
                    let articleId = res.data.article._id;

                    //Peticion AJAX
                    axios
                      .post(`${url}upload-image/${articleId}`, imageData)
                      .then((res) => {
                        if (res.data.article) {
                          formData.article = res.data.article;
                          router.push({
                            name: "article",
                            params: { id: article._id },
                          });
                        }
                      })
                      .catch(function(error) {
                        if (error.response) {
                          console.log(error.response.data);
                          console.log(error.response.status);
                        } else {
                          console.log("Error", error.message);
                        }
                        console.log(error.config);
                      });
                  } else {
                    formData.article = res.data.article;
                    router.push({
                      name: "article",
                      params: { id: article._id },
                    });
                  }
                }
              })
              .catch(function(error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                } else {
                  console.log("Error", error.message);
                }
                console.log(error.config);
              }); //End --Articulos guardados--

            Swal.fire(
              "¡Los cambios se han realizado exitosamente!",
              "",
              "success"
            );
          } else if (result.isDenied) {
            if (props.imageName) {
              router.push({
                name: "ArticleEdit",
                params: { id: article._id, imageName: article.image },
              });
            } else {
              router.push({
                name: "ArticleEdit",
                params: { id: article._id },
              });
            }
            Swal.fire("!Los cambios no se han guardado!", "", "info");
          }
        });
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
      url,
      article,
      file,
      image,
      resetFields,
      getArticle,
      fileChange,
      saveArticle,
    };
  },
};
</script>
