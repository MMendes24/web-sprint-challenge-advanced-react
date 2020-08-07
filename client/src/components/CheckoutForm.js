import React, { useState } from "react";
import { useForm } from '../hooks/useForm'

const initialItems = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [ showSuccessMessage, setShowSuccessMessage, items, handleChanges ] = useForm(initialItems);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={items.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={items.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={items.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={items.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={items.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={items.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {items.firstName} {items.lastName}
          </p>
          <p>{items.address}</p>
          <p>
            {items.city}, {items.state} {items.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
