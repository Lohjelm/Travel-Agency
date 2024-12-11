import React, { useState } from "react";
import "../App.css";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value);
  };

  const handleExpirationDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 4);
    value = value.replace(/(\d{2})(?=\d)/, "$1-");
    setExpirationDate(value);
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);
    setCvv(value);
  };

  return (
    <div className="payment-form-container">
      <h2 className="form-title">Payment</h2>
      <form>
        <div className="form-group">
          <label className="form-label">Pay With:</label>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="payment" value="card" className="radio-input" /> Card
            </label>
            <label className="radio-item">
              <input type="radio" name="payment" value="bank" className="radio-input" /> Bank
            </label>
            <label className="radio-item">
              <input type="radio" name="payment" value="transfer" className="radio-input" /> Transfer
            </label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="input-field"
          />
        </div>
        <div className="form-group two-cols">
          <input
            type="text"
            placeholder="MM-YY"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvv}
            onChange={handleCvvChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" /> Save card details
          </label>
        </div>
        <button className="submit-button">Pay</button>
      </form>
    </div>
  );
}
