import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = [
  {
    id: 1,
    count: 0,
    price: 35500,
    quantity: 2,
    name: "Asus Vivobook X515MA",
  },
  {
    id: 2,
    count: 0,
    price: 9300,
    quantity: 35,
    name: "Dell E1916HV 18.5 Inch",
  },
  {
    id: 3,
    count: 0,
    price: 36500,
    quantity: 72,
    name: "Canon Eos 4000D 18MP",
  },
];

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((counter) =>
        counter.id === action.id && action.quantity !== 0
          ? {
              ...counter,
              count: counter.count + 1,
              quantity: counter.quantity - 1,
            }
          : counter
      );

    case DECREMENT:
      return state.map((counter) =>
        counter.id === action.id && action.payload !== 0
          ? {
              ...counter,
              count: counter.count - 1,
              quantity: counter.quantity + 1,
            }
          : counter
      );
    default:
      return state;
  }
};

export default counterReducer;
