import React from "react";

function Footer(props) {
  return (
    <div className="row fixed-bottom mb-2">
      <button className="btn btn-danger col-2" onClick={props.resetQty}>
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center pt-1 ">
        Total Amount: {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}

export default Footer;
