import Axios from 'axios';


const state = {
    data: [],

};

const getters = {
  GET_JSON: state => {
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
      let {data} = await Axios.get('http://localhost:3000/posts')
      context.commit('GET_DATA', data)


  },
};


export default {
  state,
  getters,
  mutations,
  actions,
};