import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
import todos from './modules/todo';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
  },
});