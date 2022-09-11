import React from "react";
import { CartItem } from "../components/cartitem";
import { Price } from "../components/price";
import { ProductList } from "../components/products";

const ShoppingCart = () => {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <ProductList />
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <CartItem />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
