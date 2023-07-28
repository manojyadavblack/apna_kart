import React from "react";

function Product(props) {
  // const [count, setCount] = useState();
  // console.log(props.product);
  // function incQty(index) {

  // }

  return (
    <div className="row mt-3">
      <div className="col-5">
        <h1>
          {props.product.name}{" "}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h1>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decQty(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.qty}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incQty(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">{props.product.qty * props.product.price}</div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeitem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Product;
