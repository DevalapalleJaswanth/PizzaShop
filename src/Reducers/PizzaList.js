const PizzaList = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'GETLIST':
      return { list: [...action.payload], ...state };
    case 'GETITEMS':
      return { items: [...action.payload], ...state };

    default:
      return state;
  }
};

export default PizzaList;
