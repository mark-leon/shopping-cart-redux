import React from "react";
import { useSelector } from "react-redux";

const Price = () => {
  const state = useSelector((state) => state);
  const totalPrice = () => {
    return state.reduce(
      (total, counter) => total + counter.count * counter.price,
      0
    );
  };
  return (
    <div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">{totalPrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
