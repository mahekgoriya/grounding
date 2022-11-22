import React, { Component } from 'react';
import Pageheading from "./Pageheading.jsx";

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <>
            <Pageheading title="CART" />
            <div className='container py-4'>
                <div className='row'>
                <form method="get" action="/checkout">
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                      <tr className="text-sm">
                        <th className="border-gray-300 border-top py-3" colSpan="2">Product</th>
                        <th className="border-gray-300 border-top py-3">Unit price</th>
                        <th className="border-gray-300 border-top py-3">Discount</th>
                        <th className="border-gray-300 border-top py-3">Total</th>
                        <th className="border-gray-300 border-top py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-sm">
                        <td className="align-middle border-gray-300 py-3"><a href="#"><img className="img-fluid flex-shrink-0" src="img/detailsquare.jpg" alt="White Blouse Armani" width="50"/></a></td>
                        <td className="align-middle border-gray-300 py-3"><a href="#">White Blouse Armani</a></td>
                        
                        <td className="align-middle border-gray-300 py-3">$123.00</td>
                        <td className="align-middle border-gray-300 py-3">$0.00</td>
                        <td className="align-middle border-gray-300 py-3">$246.00</td>
                        <td className="align-middle border-gray-300 py-3">
                          <button className="btn btn-link p-0" type="button"><i className="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
                      <tr className="text-sm">
                        <td className="align-middle border-gray-300 py-3"><a href="#"><img className="img-fluid flex-shrink-0" src="img/basketsquare.jpg" alt="White Blouse Armani" width="50"/></a></td>
                        <td className="align-middle border-gray-300 py-3"><a href="#">White Blouse Armani</a></td>
                        
                        <td className="align-middle border-gray-300 py-3">$200.00</td>
                        <td className="align-middle border-gray-300 py-3">$0.00</td>
                        <td className="align-middle border-gray-300 py-3">$200.00</td>
                        <td className="align-middle border-gray-300 py-3">
                          <button className="btn btn-link p-0" type="button"><i className="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th className="py-3 border-0" colSpan="5"> <span className="h4 text-gray-700 mb-0">Total</span></th>
                        <th className="py-3 border-0 text-end" colSpan="2"> <span className="h4 text-gray-700 mb-0">$446.00</span></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="row gx-lg-0 align-items-center bg-light px-4 py-3 text-center mb-5">
                  <div className="col-md-6 text-md-start py-1"></div>
                  <div className="col-md-6 text-md-end py-1">
                    <button className="btn btn-outline-primary my-1" type="submit">Proceed to checkout <i className="fas fa-angle-right ms-1"></i></button>
                  </div>
                </div>
                
              </form>
                </div>
            </div>
            </>
        );
    }
}
 
export default Cart;