//Route Components
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";

//Paquetes
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/hello", component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
