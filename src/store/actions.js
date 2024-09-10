export default {
  async fetchSneakers({ commit, state }) {
    try {
      commit("setIsLoading", true);
      const response = await fetch(
        `https://604781a0efa572c1.mokky.dev/items?page=${state.currentPage}&limit=${state.limit}`
      );
      let data = await response.json();
      let totalPages = data.meta.total_pages;
      data = data.items.filter((item) => item.title);
      setTimeout(() => {
        commit("setIsLoading", false);
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
      // localStorage.setItem("balance", JSON.stringify(state.balance));
      // localStorage.setItem(
      //   "selectedSneakers",
      //   JSON.stringify(state.selectedSneakers)
      // );
    }
  },
  removeSneaker({ commit, state }, sneaker) {
    const isSelected = state.selectedSneakers.some(
      (selected) => selected.id === sneaker.id
    );
    if (isSelected) {
      commit("removeBalance", sneaker.price);
      commit("removeSelectedSneaker", sneaker);
      // let balance = localStorage.getItem("balance");
      // balance = JSON.parse(balance);

      // balance -= sneaker.price;
      // localStorage.setItem("balance", balance);
      // let selectedSneakers = localStorage.getItem("selectedSneakers");
      // selectedSneakers = JSON.parse(selectedSneakers);
      // selectedSneakers = selectedSneakers.filter(
      //   (item) => item.id !== sneaker.id
      // );
      // localStorage.setItem(
      //   "selectedSneakers",
      //   JSON.stringify(selectedSneakers)
      // );
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
