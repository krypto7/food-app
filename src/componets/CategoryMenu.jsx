import React, { useEffect } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = React.useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6 py-3">
      <h3 className="text-xl font-semibold">find the best food</h3>
      <div className="my-5 flex gap-5 overflow-x-scroll scroll-behavior-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={` px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((item, index) => (
          <button
            onClick={() => {
              dispatch(setCategory(item));
            }}
            key={index}
            className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500
             hover:text-white cursor-pointer ${
               selectedCategory === item && "bg-green-500 text-white"
             }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
