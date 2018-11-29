module.exports = (state = [], action) => {
  switch (action.type) {
    case "ADD_DRINK":
      return state.concat(action.payload);
    case "DELETE_DRINK":
      return (state = action.payload);
    default:
      return state;
  }
};
