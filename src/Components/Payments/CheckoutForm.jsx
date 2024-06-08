import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const totalPrice = 400;
    axiosSecure
      .post(
        "/create-payment-intent",
        { price: parseInt(totalPrice) },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Stripe Error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      {" "}
      <div className="lg:w-[990px] mx-auto">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          <button
            disabled={!stripe || !clientSecret}
            className="bg-[#570DF8] py-[10px] text-white lg:w-[400px] rounded-md font-semibold"
            type="submit"
          >
            Pay
          </button>
          <p className="text-red-500">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
