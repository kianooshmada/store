import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { id, img } = this.props.product || {};

    console.log("p:" + id);
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked me on the image container")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
