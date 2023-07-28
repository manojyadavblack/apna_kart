import React, { Component } from "react";

export default class Additem extends Component {
  //make the hook
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: NaN,
    };
  }
  render() {
    return (
      <div>
        <form
          className="row mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(
              this.state.productName,
              Number(this.state.productPrice)
            );
            this.setState({ productName: "" });
            this.setState({ productPrice: NaN });
          }}
        >
          <div className="form-group col-4 mb-3">
            <label htmlFor="inputName">Name</label>
            <input
              type="test"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              placeholder="Enter yout name"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.target.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="exampleInputPassword1">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter the price"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.target.value) });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-4"
            // onClick={}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
