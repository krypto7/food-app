import React from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlices";
import { toast } from "react-hot-toast";

function ItemCard({ id, img, price, title, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 p-2 rounded-lg shadow-md mb-2">
      <img src={img} alt="" className="w-[50px] h-[50px] rounded-lg" />
      <div className="w-full ml-3 leading-5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800 w-[80%]">{title}</span>
          <button>
            <MdDelete
              className="text-gray-600"
              onClick={() => {
                dispatch(removeFromCart({ id, title, price, img, qty }));
                toast(`${title} removed`, {
                  icon: "🗑️",
                });
              }}
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">₹ {price}</span>

          <div className="flex items-center justify-center gap-2">
            <button>
              <FaMinus
                onClick={() => {
                  if (qty > 1) {
                    dispatch(decrementQty({ id }));
                  } else {
                    qty = 0;
                  }
                }}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 rounded-md text-md transition-all ease-linear cursor-pointer"
              />
            </button>
            <span>{qty}</span>
            <button>
              <FaPlus
                onClick={() => {
                  if (qty >= 1) {
                    dispatch(incrementQty({ id }));
                  } else {
                    qty = 0;
                  }
                }}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 rounded-md text-md ease-linear cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
