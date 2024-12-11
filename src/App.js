import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePlaceholder from './components/ImagePlaceholder';
import PaymentForm from "./components/PaymentForm";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      
      <ImagePlaceholder />
      
      <div className="payment-order-summary-container">
        <PaymentForm />
        <OrderSummary />
      </div>

      <Footer />
    </div>
  );
}

export default App;
