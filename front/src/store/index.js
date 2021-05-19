import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null,
    totalUsers: "",
    limit: "",
    totalPages: "",
    pagingCounter: ""

  },
  getters: {
    users({ users }) {
      return users;
    },
    totalPages({ totalPages }) {
      return totalPages;
    }
  },
  mutations: {
    UPDATE_USERS(state, payload) {
      state.users = payload;
    },
    UPDATE_TOTAL_USERS(state, payload) {
      state.totalUsers = payload;
    },
    UPDATE_LIMIT(state, payload) {
      state.limit = payload;
    },
    UPDATE_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },
    UPDATE_PAGING_COUNTER(state, payload) {
      state.pagingCounter = payload
    }
  },
  actions: {
    async getUser(context, payload) {
      const response = await api.post(`user/`, {user: payload});

      //console.log('RESPONSE: ', response);
      context.commit("UPDATE_USERS", response.data.docs);
      context.commit("UPDATE_TOTAL_PAGES", response.data.totalPages);
    },
    async getUserByPage(context, payload) {
      const response = await api.get(`users/${payload}`);

      console.log('RESPONSE: ', response);

      context.commit("UPDATE_USERS", response.data.docs);
      context.commit("UPDATE_TOTAL_PAGES", response.data.totalPages);
    }
  },
  modules: {
  }
})
