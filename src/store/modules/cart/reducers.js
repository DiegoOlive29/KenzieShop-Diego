import { ADD, REMOVE } from "./actionTypes";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD:
      const { product } = action;
      console.log(state);
      return [...state, product];

    case REMOVE:
      const { list } = action;

      return list;

    default:
      return state;
  }
};
export default cartReducer;
