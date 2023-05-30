import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Col, Row } from "react-bootstrap";
import "./../../assets/style/stripe.css";
export const  PurchasingFormComponent = ({order}) =>{

    const stripe = useStripe();
    const elements = useElements();  
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
      if (!stripe) {
        return;
      }
  
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
  
      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Pago se está procesando!");
            break;
          case "processing":
            setMessage("Tu pago se está procesando.");
            break;
          case "requires_payment_method":
            setMessage("Tu pago no se ha realizado, por favor intentelo de nuevo.");
            break;
          default:
            setMessage("Ups! algo ha ido mal durante el proceso de pago.");
            break;
        }
      });
    }, [stripe]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!stripe || !elements) {
       
        return;
      }
  
      setIsLoading(true);
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          
          return_url: "http://localhost:3000/purchasingProcess/result",
          

        },
      });
  
     
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("Ha ocurrido un error, por favor intente nuevamente.");
      }
  
      setIsLoading(false);
    };
  
    const paymentElementOptions = {
      layout: "tabs"
    }
  
    return (
    <Row>
        <Col sm={11}>
        <h2 className="text-payment-process">Completa tu pago</h2>
        <form id="payment-form" className="form-control" onSubmit={handleSubmit}>
        <LinkAuthenticationElement
          id="link-authentication-element"
          //onChange={(e) => setEmail(e.target.value)}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
        </Col>
    </Row>
      
    );
}