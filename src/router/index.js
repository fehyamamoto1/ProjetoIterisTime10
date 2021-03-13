import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contato from "../views/Contato.vue";
import Validacao from "../views/Validacao.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pg-contato",
    name: "Contato",
    component: Contato,
  },
  {
    path: "/validado",
    name: "Validacao",
    component: Validacao,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
