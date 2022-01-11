import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "../utils/cookies";
import { loginUser } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
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
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit("setToken", data.data.accessToken);
      console.log(data);
      commit("setUserEmail", userData.email);
      saveAuthToCookie(data.data.accessToken);
      saveUserToCookie(userData.email);
      return data;
    },
  },
});
