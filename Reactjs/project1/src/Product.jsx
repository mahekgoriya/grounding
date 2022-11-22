import React, { Component } from "react";
import Pageheading from "./Pageheading.jsx";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  Item(props) {
    return (
      <div className="col-lg-3 col-md-6">
        <div className="product h-100">
          <div className="product-image">
            <a href="/product">
              <img className="img-fluid" src={props.photo} alt="" />
            </a>
          </div>
          <div className="py-4 px-3 text-center">
            <h3 className="h5 text-uppercase mb-3"><a className="reset-link" href="/product"> {props.title}</a></h3>
            <p class="mb-0"><b>{props.price} Rs</b></p>
          </div>
          <ul className="list-unstyled p-0 ribbon-holder mb-0"></ul>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Pageheading title="PRODUCT" />
        <section className="py-5">
          <div className="container py-4">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="row gy-5 align-items-stretch">
                  <this.Item title="GIRLS" photo="img/product2.jpg" price={1500}/>
                  <this.Item title="BOYS" photo="img/product3.jpg" price={1000}/>
                  <this.Item title="KIDS" photo="img/product4.jpg" price={500} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
