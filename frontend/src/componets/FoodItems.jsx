import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItems() {
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };

  const checkCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return FoodData.length > 0 ? (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center items-center lg:justify-start mx-6 my-10">
        {FoodData.filter((item) => {
          if (checkCategory === "All") {
            return item.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              checkCategory === item.category &&
              item.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            img={food.img}
            title={food.name}
            price={food.price}
            rating={food.rating}
            discription={food.desc}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  ) : (
    <h1 className="text-center text-2xl mt-10">No Food Items Available</h1>
  );
}

export default FoodItems;
