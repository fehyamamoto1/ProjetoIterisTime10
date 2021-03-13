import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {},
  state: {
    user: {
      nome: String,
      id: Number,
    },
  },
  mutations: {
    logar(state, user) {
      state.user = user;
    },
  },
});

export default store;
