import React from "react";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";
import Cart from "./Cart";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
};
export default Home;
