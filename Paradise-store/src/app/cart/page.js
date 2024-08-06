"use client";
import styles from "./cart.module.css";
import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { current } from "@reduxjs/toolkit";

const cart = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(currentCartItems, "hammad cart items");
    setData(currentCartItems);
  }, []);


  const handleRemove = (index) => {
    const newData = Data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem("cartItems", JSON.stringify(newData));
  };
  return (
    <>
      <div className={styles.CartMain}>
        {Data.map((product, index) => (
          <div>
            <div className={styles.CartMain2} key={index}>
              <div className={styles.cartImage}>
                <img src={product.imageUrl} alt={product.name} />
                <div
                  onClick={() => handleRemove(index)}
                  className={styles.delete}
                >
                  Delete
                </div>
              </div>
              <div>
                <div>{product.name}</div>
                <div>
                  {product.price} {"  "}
                </div>
                <div>
                  <div className={styles.deliver}>
                    {" "}
                    QTY : {product.quantity}
                  </div>

                  <div>Delivery ON:</div>
                  <div className={styles.deliver}>
                    {product.time} | {product.date} | {product.method}
                  </div>
                </div>
              </div>
              {/* <div>
            {parseFloat(product.price.replace("AED ", "")) * product.quantity}
          </div> */}
              <div className={styles.change}>Change </div>
            </div>
            <div className={styles.formContainer}>
              <h2>Select Delivery Address</h2>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="city">Recipient's City</label>
                  <input type="text" id="city" name="city" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Recipient's Address</label>
                  <input type="text" id="address" name="address" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="landmark">Landmark</label>
                  <input type="text" id="landmark" name="landmark" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="mobile">Recipient's Mobile</label>
                  <input type="text" id="mobile" name="mobile" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Recipient's Email (optional)</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className={styles.formGroup}>
                  <label>Address Type</label>
                  <div className={styles.radioGroup}>
                    <label>
                      <input type="radio" name="addressType" value="home" />{" "}
                      Home
                    </label>
                    <label>
                      <input type="radio" name="addressType" value="office" />{" "}
                      Office
                    </label>
                    <label>
                      <input type="radio" name="addressType" value="other" />{" "}
                      Other
                    </label>
                  </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Save and Deliver Here
                </button>
                <button type="button" className={styles.cancelButton}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default cart;
