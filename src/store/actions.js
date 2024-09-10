export default {
  async fetchSneakers({ commit, state }) {
    try {
      const response = await fetch(
        `https://604781a0efa572c1.mokky.dev/items?page=${state.currentPage}&limit=${state.limit}`
      );
      let data = await response.json();
      let totalPages = data.meta.total_pages;
      data = data.items.filter((item) => item.title);
      setTimeout(() => {
        commit("setIsLoading");
        commit("setTotalPages", totalPages);
        commit("setSneakers", data);
      }, 1000);
    } catch (error) {
      console.error(error);
      commit("setIsLoading", false);
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
