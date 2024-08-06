import React from "react";
import styles from "./AddsOn.module.css";
import AddOnCard from "./AddOnCard";
function AddOn() {
  const products = [
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2:"/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2:"/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",


    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
  ];
  return (
    <>
      <div className={styles.Card}>
        {products.map((product, index) => (
          <AddOnCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            imageUrl2={product.imageUrl2}
            imageUrl3={product.imageUrl3}

          />
        ))}{" "}
      </div>
    </>
  );
}

export default AddOn;
