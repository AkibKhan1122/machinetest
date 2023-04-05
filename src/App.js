import React from "react";
import Header from "./header/Header";
import AllRoutes from "./header/AllRoutes";
import { useSelector } from "react-redux";

const App = () => {
  const addedItems = useSelector((state) => state.cart.item);
  console.log(addedItems);
  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
};

export default App;
