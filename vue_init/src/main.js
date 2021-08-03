//Route Components
import Home from "./components/Home.vue";
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina1 from "./components/Pagina1.vue";
import Pagina2 from "./components/Pagina2.vue";

//Paquetes
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/blog", component: Blog },
  { path: "/formulario", component: Formulario },
  { path: "/pagina1", component: Pagina1 },
  { path: "/pagina2", component: Pagina2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
