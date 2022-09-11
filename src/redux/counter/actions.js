import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (id, value) => {
  return {
    type: INCREMENT,
    payload: value,
    id: id,
  };
};

export const decrement = (id, value) => {
  return {
    type: DECREMENT,
    payload: value,
    id: id,
  };
};
