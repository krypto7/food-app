import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (acc, items) => acc + items.qty * items.price,
    0
  );
  const navigate = useNavigate();

  const [activeCart, setActiveCart] = useState(false);

  return (
    <>
      <div
        className={`overflow-y-hidden fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white shadow-lg p-4 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out duration-500 z-10`}
      >
        <div className="flex justify-between items-center">
          <span className="text-[25px] font-bold">My Order</span>
          <ImCancelCircle
            onClick={() => setActiveCart(!activeCart)}
            className="text-black hover:text-red-500 text-2xl transition-all ease-out cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              img={item.img}
              price={item.price}
              title={item.title}
              qty={item.qty}
            />
          ))
        ) : (
          <h1 className="text-center text-xl mt-10 font-bold text-gray-800">
            No Items in Cart
          </h1>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:{totalItems}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount:{totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <CgShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalItems > 0 &&
          "animate-bounce delay-700 transition-all ease-in-out"
        }`}
      />
    </>
  );
}

export default Cart;
