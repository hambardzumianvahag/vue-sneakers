export default {
  async fetchSneakers({ commit, state }) {
    try {
      const response = await fetch(
        `https://604781a0efa572c1.mokky.dev/items?page=${state.currentPage}&limit=4`
      );
      let data = await response.json();
      data = data.items.filter((item) => item.title);
      commit("setSneakers", data);
    } catch (error) {
      console.error(error);
    }
  },
  addToBalance({ commit, state }, sneaker) {
    const isSelected = state.selectedSneakers.some(
      (selected) => selected.id === sneaker.id
    );
    if (!isSelected) {
      commit("addBalance", sneaker.price);
      commit("addSelectedSneaker", sneaker);
    }
  },
  removeSneaker({ commit, state }, sneaker) {
    const isSelected = state.selectedSneakers.some(
      (selected) => selected.id === sneaker.id
    );
    if (isSelected) {
      commit("removeBalance", sneaker.price);
      commit("removeSelectedSneaker", sneaker);
    }
  },
  confirmOrder({ commit }) {
    commit("confirmOrder");
  },
  async setPage({ commit, dispatch }, page) {
    commit("currentPage", page);
    await dispatch("fetchSneakers");
  },
};
