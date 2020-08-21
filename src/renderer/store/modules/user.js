const state = {
  status: null,
  userInfo: null,
};

const mutations = {
  UPDATE_STATUS(state, status) {
    state.status = status;
  },
  UPDATE_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};

const actions = {
  updateStatus(context, args) {
    context.commit("UPDATE_STATUS", args);
  },
};

export default {
  state,
  mutations,
  actions,
};
