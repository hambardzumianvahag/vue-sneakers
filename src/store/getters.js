export default {
  getBalance(state) {
    return state.balance;
  },
  allSneakers(state) {
    return state.sneakers;
  },
  isSneakerSelected: (state) => (sneaker) => {
    return state.selectedSneakers.some(
      (selected) => selected.id === sneaker.id
    );
  },
  allSelectedSneakers(state) {
    return state.selectedSneakers;
  },
  getPage(state) {
    return state.currentPage;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getTotalPages(state) {
    return state.totalPages;
  },
};
