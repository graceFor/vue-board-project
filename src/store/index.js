import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    token: "",
  },
  getters: {
    isLogin(state) {
      return state.email !== "";
    },
  },
  mutations: {
    setUserEmail(state, email) {
      state.email = email;
    },
    clearUserEmail(state, email) {
      state.email = "";
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});
