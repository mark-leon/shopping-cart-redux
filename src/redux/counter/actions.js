import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (id, value, quantity) => {
  return {
    type: INCREMENT,
    payload: value,
    id: id,
    quantity: quantity,
  };
};

export const decrement = (id, value, quantity) => {
  return {
    type: DECREMENT,
    payload: value,
    id: id,
    quantity: quantity,
  };
};
