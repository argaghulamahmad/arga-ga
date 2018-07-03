//modules hold user information

const state = {
  userName: '',
  userEmail: '',
  userPhotoUrl: ''
};

const getters = {
  getUserName: state => {
    return state.userName;
  },
  getUserEmail: state => {
    return state.userEmail;
  },
  getUserPhotoUrl: state => {
    return state.userPhotoUrl;
  }
};

const mutations = {
  setUserName: (state, payload) => {
    state.userName = payload;
  },
  setUserEmail: (state, payload) => {
    state.userEmail = payload;
  },
  setUserPhotoUrl: (state, payload) => {
    state.userPhotoUrl = payload;
  }
};

const actions = {
  actionUserName: ({commit}, payload) => {
    commit('setUserName', payload)
  },
  actionUserEmail: ({commit}, payload) => {
    commit('setUserEmail', payload)
  },
  actionUserPhotoUrl: ({commit}, payload) => {
    commit('setUserPhotoUrl', payload)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
