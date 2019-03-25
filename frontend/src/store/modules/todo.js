import Axios from 'axios';
import getData from '../../../data/data'

const state = {
    data: [],
};

const getters = {
  getJson: state => {
    return state.data;
  },
};

const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },

  ADD_DATA: (state, payload) => {
    state.data.push(payload);
  },
};

const actions = {
  GET_DATA: async (context) => {
    let dataFrom = getData.getArray();// get a data from module in data
    context.commit('SET_DATA', dataFrom);
  },

  SAVE_DATA: async (context) => {
    let data = await Axios.post('../../../../parser/request_post.py');
    context.commit('ADD_DATA', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};