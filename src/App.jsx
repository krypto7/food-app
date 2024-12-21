import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import Success from "./componets/Success";
import Error from "./componets/Error";
import ProtectedRoute from "./componets/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
