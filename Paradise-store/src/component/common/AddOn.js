// "import React from "react";
// import styles from "./AddsOn.module.css";
// import AddOnCard from "./AddOnCard";
// function AddOn() {
//   const products = [
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",
//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2:"/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",
//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2: "/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",
//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2: "/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",
//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2: "/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",
//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2:"/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//     {
//       name: "Pink Gypso Beauty Arrangement",
//       price: "AED 249",
//       imageUrl: "/flower1.jpg",
//       imageUrl2: "/floral-basket.jpg",
//       imageUrl3: "/red-roses.jpg",


//     },

//     {
//       name: "Mixed Floral Basket",
//       price: "AED 319",
//       imageUrl: "/floral-basket.jpg",
//       imageUrl2: "/red-roses.jpg",
//       imageUrl3: "/flower1.jpg",
//     },
//   ];
//   return (
//     <>
//       <div className={styles.Card}>
//         {products.map((product, index) => (
//           <AddOnCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             imageUrl={product.imageUrl}
//             imageUrl2={product.imageUrl2}
//             imageUrl3={product.imageUrl3}

//           />
//         ))}{" "}
//       </div>
//     </>
//   );
// }

// export default AddOn;
"use client"
import React, { useEffect, useState } from 'react';
import styles from './AddsOn.module.css';
import AddOnCard from './AddOnCard';

const AddOn= ()=> {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/getAddOn');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.addOn || []); // Adjust if needed based on your API response
    console.log(products,"add on products");

      } catch (error) {
        console.error('Error fetching add-ons:', error);
        setError(error.message);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products) return <p>Loading api data... {error}</p>;
 
  return (
    <>
      <div className={styles.Card}>
        {products.map((product, index) => (
          <AddOnCard
            key={index}
            name={product.name}
            price={product.price}
            // imageUrl={product.imageUrl}
            imageUrl2={product.imageUrl1} // Adjust based on your API response
            imageUrl3={product.imageUrl2} // Adjust based on your API response
          />
        ))}
      </div>
    </>
  );
}

export default AddOn;
