import Axios from 'axios';

const state = {
    datas: null,
};

const getters = {
  getDatas: state => {
    return state.datas;
  },
};

const mutations = {
  SET_DATA: (state, payload) => {
    state.datas = payload;
  },

  ADD_DATA: (state, payload) => {
    state.datas.push(payload);
  },
};

const actions = {
  GET_DATA: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8080/api/data.json');
    context.commit('SET_DATA', data);
  },

  SAVE_DATA: async (context, payload) => {
    let {data} = await Axios.post('../../../../parser/request_post.py');
    context.commit('ADD_DATA', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};