import Axios from 'axios';

state = {
  datas: null,
};

getters = {
  getDatas: state => {
    return state.datas;
  },
};

mutations = {
  SET_DATA: (state, payload) => {
    state.datas = payload;
  },

  ADD_DATA: (state, payload) => {
    state.datas.push(payload);
  },
};

actions = {
  GET_DATA: async (context, payload) => {
    let {datas} = await Axios.get('http://localhost:8080/data/data.json');
    context.commit('SET_DATA', datas);
  },

  SAVE_DATA: async (context, payload) => {
    let {datas} = await Axios.post('../../../../parser/request_post.py');
    context.commit('ADD_DATA', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};