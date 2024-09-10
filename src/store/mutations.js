export default {
  setSneakers(state, sneakers) {
    state.sneakers = sneakers;
  },
  addBalance(state, amount) {
    state.balance += amount;
  },
  removeBalance(state, amount) {
    state.balance -= amount;
  },
  addSelectedSneaker(state, sneaker) {
    state.selectedSneakers.push(sneaker);
  },
  removeSelectedSneaker(state, sneaker) {
    state.selectedSneakers = state.selectedSneakers.filter(
      (item) => item.id !== sneaker.id
    );
  },
  confirmOrder(state) {
    state.balance = 0;
    state.selectedSneakers = [];
  },
  currentPage(state, page) {
    state.currentPage = page;
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages;
  },
};
