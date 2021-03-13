<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Usuario from '../views/Usuario.vue'
=======
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import PontosDeColeta from "../views/PontosDeColeta";
import Usuario from "../views/Usuario";
>>>>>>> 32d1971afb0d5c8953a362c1229f12a0c8deaa9d

Vue.use(VueRouter);

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'Home',
    component: Home
  }
]
=======
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/pontosdecoleta",
    name: "PontosDeColeta",
    component: PontosDeColeta,
  },
  ,
  {
    path: "/usuario",
    name: "Usuario",
    component: Usuario,
  },
  

];
>>>>>>> 32d1971afb0d5c8953a362c1229f12a0c8deaa9d

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
