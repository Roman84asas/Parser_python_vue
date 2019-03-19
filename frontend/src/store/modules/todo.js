import Axios from 'axios';

state = {
  data: null,
};

getters = {
  DATAS: state => {
    return state.data;
  },
};

mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },

  ADD_DATA: (state, payload) => {
    state.data.push(payload);
  },
};

actions = {
  GET_DATA: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8085/data/data.json');
    context.commit('SET_DATA', data);
  },

  SAVE_DATA: async (context, payload) => {
    let {data} = await Axios.post('../../../../parser/request_post.py');
    context.commit('ADD_DATA', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};