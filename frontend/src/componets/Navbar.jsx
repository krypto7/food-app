import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div>
        <h3 className="font-bold text-gray-600 text-xl">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Food-Mart</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="search here"
          autoComplete="off"
          className="border-2 border-gray-400 text-sm rounded-lg p-3 outline-none w-full lg:w-[25vw]"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};
export default Navbar;
