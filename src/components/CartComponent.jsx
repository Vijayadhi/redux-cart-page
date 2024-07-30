import React from 'react';
import Swal from 'sweetalert2';

function CartComponent({ totalPrice, tax, discount }) {
    const finalTotal = totalPrice - discount + tax;

    const handlePurchase = () => {
        Swal.fire({
            title: 'Order Successful!',
            text: `Your order has been placed successfully. Total amount: $${finalTotal.toFixed(2)}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="col-lg-3">
            <div className="card shadow-0 border">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2">${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Discount:</p>
                        <p className="mb-2 text-success">-${discount.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">TAX:</p>
                        <p className="mb-2">${tax.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2 fw-bold">${finalTotal.toFixed(2)}</p>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-success w-100 shadow-0 mb-2" onClick={handlePurchase}>Make Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;
