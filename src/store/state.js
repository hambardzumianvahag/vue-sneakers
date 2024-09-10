export default {
  limit: 4,
  isLoading: true,
  currentPage: 1,
  totalPages: 0,
  balance: JSON.parse(localStorage.getItem("balance")) || 0,
  sneakers: [],
  selectedSneakers: JSON.parse(localStorage.getItem("selectedSneakers")) || [],
};
