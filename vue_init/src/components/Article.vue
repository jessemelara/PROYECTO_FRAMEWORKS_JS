<template>
  <div class="center">
    <section id="content">
      <div id="articles" ref="divContainer">
        <article class="article-item article-detail" v-if="article">
          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">
            {{
              moment(article.date)
                .fromNow()[0]
                .toUpperCase() +
                moment(article.date)
                  .fromNow()
                  .slice(1)
            }}
          </span>
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="../assets/images/default-image.svg"
              :alt="article.title"
              v-else
            />
          </div>
          <p>{{ article.content }}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illo,
            vitae quod possimus, facilis voluptates voluptatum aut non qui iste
            quia temporibus dolore accusamus odio libero magni fugiat. Hic, a.
          </p>
          <p>
            Suscipit architecto, velit explicabo nihil asperiores accusantium
            repellendus cumque maiores! Suscipit a error, sapiente voluptas sit
            asperiores repellendus aspernatur, autem, temporibus minima nemo
            maxime fugiat rerum fuga. Voluptatibus, laudantium beatae!
          </p>
          <p>
            Velit cumque culpa dolorem possimus explicabo a reprehenderit,
            assumenda quo eaque repudiandae, eos omnis autem suscipit, totam
            tempora! Dolorum reprehenderit quo dolores maxime architecto
            exercitationem sequi voluptatem inventore nulla quis?
          </p>
          <p>
            Adipisci quod placeat molestias excepturi quaerat corrupti nulla
            reprehenderit possimus sit, quasi repudiandae delectus iste quidem
            vero quisquam, laudantium officia nemo! Consequuntur fugit aut
            cumque quod saepe debitis, perspiciatis quam!
          </p>
          <p>
            Aliquam nulla illum fugiat repellendus non blanditiis ipsa
            necessitatibus aut voluptatum aperiam libero, quis accusamus. Quas
            rem, dolores, minima doloremque nobis blanditiis quam sequi
            laudantium iste iure, consequuntur cum?
          </p>
          <div className="buttons">
            <button
              class="btn btn-warning"
              @click="
                if (article.image) {
                  this.$router.push({
                    name: 'ArticleEdit',
                    params: { id: article._id, imageName: article.image },
                  });
                } else {
                  this.$router.push({
                    name: 'ArticleEdit',
                    params: { id: article._id },
                  });
                }
              "
            >
              Editar
            </button>
            <button class="btn btn-danger">
              Eliminar
            </button>
          </div>
          <div className="clearfix"></div>
        </article>
        <article v-else>
          <h1 class="subheader">Artículo no encontrado</h1>
          <p>El artículo no fue encontrado. Intente más tarde.</p>
        </article>
      </div>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import axios from "axios";
import moment from "moment";
import { useRouter } from "vue-router";

export default {
  name: "Article",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
      isLoading: false,
      moment: moment,
      useRouter,
    };
  },
  mounted() {
    let articleId = this.$route.params.id;
    this.oneArticle(articleId);

    let loader = this.$loading.show({
      // Optional parameters
      container: this.$refs.divContainer,
      canCancel: true,
      onCancel: this.onCancel,
    });
    // simulate AJAX
    setTimeout(() => {
      loader.hide();
    }, 900);
  },
  methods: {
    oneArticle(articleId) {
      axios
        .get(`${this.url}article/${articleId}`)
        .then((res) => {
          if (res.data.status == "success") {
            this.article = res.data.article;
          }
          console.log(res.data);
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    onCancel() {
      console.log("El usuario interrumpió la carga.");
    },
  },
};
</script>
