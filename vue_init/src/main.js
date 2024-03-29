//Route Components
import Home from "./components/Home.vue";
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina1 from "./components/Pagina1.vue";
import Pagina2 from "./components/Pagina2.vue";
import NotFound from "./components/NotFound.vue";
import Search from "./components/Search.vue";
import Redirect from "./components/Redirect.vue";
import Article from "./components/Article.vue";
import ArticleCreate from "./components/ArticleCreate.vue";
import ArticleEdit from "./components/ArticleEdit.vue";

//Paquetes
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueMoment from "vue-moment";
import moment from "moment";
import "moment/locale/es";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/blog", component: Blog },
  { path: "/redirect/:txtSearch", component: Redirect },
  { path: "/blog/search/:txtSearch", component: Search },
  { path: "/blog/article/:id", name: "article", component: Article },
  {
    path: "/blog/article-create",
    name: "ArticleCreate",
    component: ArticleCreate,
  },
  {
    path: "/blog/article-edit/:id/:imageName?",
    name: "ArticleEdit",
    component: ArticleEdit,
    props: true,
  },
  { path: "/formulario", component: Formulario },
  { path: "/pagina1/:nombre?/:apellido?", name: "pagina1", component: Pagina1 },
  { path: "/pagina2", component: Pagina2 },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(VueLoading);
app.use(VueMoment, {
  moment,
});
