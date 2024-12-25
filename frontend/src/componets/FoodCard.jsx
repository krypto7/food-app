import React from "react";
import start from "../assets/start.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";

function FoodCard({ id, img, title, price, rating, discription, handleToast }) {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out"
      />
      <div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="w-[80%]">{title}</h1>
          <p className="text-green-600">₹ {price}</p>
        </div>
        <p className="line-clamp-2 text-sm font-normal mt-5">{discription}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="flex items-center gap-1">
            <span>
              <img src={start} className="h-[20px] w-[20px]" />
            </span>
            {rating}
          </p>
          <button
            className="px-2 py-1 bg-green-500 text-white rounded-lg"
            onClick={() => {
              console.log("Add to cart clicked");
              dispatch(
                addToCart({ id, title, price, rating, price, img, qty: 1 })
              );
              handleToast(title);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
