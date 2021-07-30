import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

const app = createApp(App);

app.use(VueRouter);

const routes = [{}];
const router = new VueRouter({
  routes,
  mode: "history",
});

app.use(router);
app.mount("#app");
