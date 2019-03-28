// import Axios from 'axios';
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
  GET_DATA: (state, payload) => {
    state.data.push(payload);
  },


};

const actions = {
  SAVE_DATA: async (context) => {
      let dataFrom = getData.getArray();// get a data from module in data
      context.commit('GET_DATA', dataFrom);
  },
};


export default {
  state,
  getters,
  mutations,
  actions,
};