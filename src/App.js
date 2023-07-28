// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Additem from "./Components/Additem";
// import { render } from "@testing-library/react";

function App() {
  // const Product = [
  //   {
  //     price: 50,
  //     name: "iPhone",
  //     qty: 0,
  //   },
  //   {
  //     price: 10,
  //     name: "Samsung",
  //     qty: 0,
  //   },
  // ];
  const Product=[];
  let [prodList, setProdList] = useState(Product);
  let [totalAmount, setTotalAmount] = useState(0);

  let incQty = (index) => {
    let newProdList = [...prodList];
    newProdList[index].qty++;

    let newTotalAmount = totalAmount;
    newTotalAmount += newProdList[index].price;
    setTotalAmount(newTotalAmount);

    setProdList(newProdList);
  };

  let decQty = (index) => {
    let newProdList = [...prodList];
    if (newProdList[index].qty !== 0) {
      newProdList[index].qty--;

      let newTotalAmount = totalAmount;
      newTotalAmount -= newProdList[index].price;
      setTotalAmount(newTotalAmount);

      setProdList(newProdList);
    }
  };

  let resetQty = () => {
    let newProdList = [...prodList];
    newProdList.map((product) => {
      return (product.qty = 0);
    });
    setProdList(newProdList);
    setTotalAmount(0);
  };

  let removeitem = (index) => {
    let newProdList = [...prodList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProdList[index].qty * newProdList[index].price;
    // console.log(newProdList);
    // console.log(newTotalAmount);
    newProdList.splice(index, 1);
    setProdList(newProdList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProdList = [...prodList];
    newProdList.push({ name, price, qty: 0 });
    setProdList(newProdList);
    setTotalAmount(0);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem={addItem} />
        <ProductList
          productList={prodList}
          incQty={incQty}
          decQty={decQty}
          removeitem={removeitem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQty={resetQty} />
    </>
  );
}

export default App;
