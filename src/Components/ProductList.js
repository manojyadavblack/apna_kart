import React from "react";
import Product from "./Product.js";

function ProductList(props) {
  // console.log(props.incQty);

  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incQty={props.incQty}
          decQty={props.decQty}
          index={i}
          removeitem={props.removeitem}
        />
      );
    })
  ) : (
    <h1>No Products exist in the Cart</h1>
  );
}

export default ProductList;

// NOTE: Components in react are Pure funcions
