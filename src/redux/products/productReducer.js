import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionType";
import { initialState } from "./initaiState";
const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
          price: parseInt(action.payload.price),
          quantity: parseInt(action.payload.quantity),
        },
      ];
    case ADD_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        } else {
          return product;
        }
      });
    case REMOVE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          //ที่ใส่ id ได้เลยเพราะว่ามันส่งมาเป็นไอดีไม่ใช่ odj
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

export default productReducer;
