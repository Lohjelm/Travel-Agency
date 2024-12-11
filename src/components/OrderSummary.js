import React from 'react';

export default function OrderSummary() {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="order-summary-item">
        <p>Phi Phi Islands</p>
        <p className="price">$228</p>
      </div>
      <div className="order-summary-item">
        <p>Qty: 2</p>
        <p>Including $2.24 in taxes</p>
      </div>
      <div className="order-summary-total">
        <p>Total</p>
        <p>$228</p>
      </div>
    </div>
  );
}
