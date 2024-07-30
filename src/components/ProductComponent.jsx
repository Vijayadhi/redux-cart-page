import React, { useState } from 'react';
import CartComponent from './CartComponent';
import { useSelector } from 'react-redux';

function ProductComponent() {
    const product_data = useSelector((state) => state.products);
    const [quantities, setQuantities] = useState(product_data.map(() => 1)); // Initialize quantities with default value 1 for each product

    const handleQuantityChange = (index, newQuantity) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = newQuantity;
        setQuantities(updatedQuantities);
    };

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    const totalPrice = product_data.reduce((total, product_data, index) => {
        return total + calculateSubtotal(product_data.price, quantities[index]);
    }, 0);

    const tax = totalPrice * 0.05; // Assuming 5% tax
    const discount = 60.00; // Example discount
    const finalTotal = totalPrice - discount + tax;

    return (
        <>
            {/* {console.log(product_data)} */}
            <section className="bg-light my-5">
                <div className="container justify-content-center">
                    <div className="row">
                        {/* <!-- cart --> */}
                        <div className="col-lg-9">
                            <div className="card border shadow-0">
                                <div className="m-4">
                                    <h4 className="card-title mb-4">Your shopping cart</h4>
                                    {
                                        product_data.map((e, index) => (
                                            <div className="row gy-3 mb-4" key={e.id}>
                                                <div className="col-lg-5">
                                                    <div className="me-lg-5">
                                                        <div className="d-flex">
                                                            <img src={e.image} className="border rounded me-3" style={{ width: '96px', height: '96px' }} alt={e.title} />
                                                            <div>
                                                                <a href="#" className="nav-link">{e.title}</a>
                                                                <p className="text-muted">{e.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                                    <div>
                                                        <select
                                                            style={{ width: '100px' }}
                                                            className="form-select me-4"
                                                            value={quantities[index]}
                                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                        >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <span className="h6">${calculateSubtotal(e.price, quantities[index]).toFixed(2)}</span> <br />
                                                        <small className="text-muted text-nowrap">${e.price} / per item</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="border-top pt-4 mx-4 mb-4">
                                    <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    </p>
                                </div>
                            </div>
                        </div>
                        <CartComponent totalPrice={finalTotal} tax={tax} discount={discount} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductComponent;
