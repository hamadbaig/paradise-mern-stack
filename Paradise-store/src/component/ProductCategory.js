"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from './products/ProductCard';
import styles from './ProductMid.module.css';

const ProductCategory = ({ find }) => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  
  useEffect(() => {
    const fetchProducts = async () => {
      if (!apiUrl) {
        console.error('API URL is not defined');
        return;
      }

      try {
        const options = {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ categoryId: [find] }), // Assuming find is a single category ID
        };

        const response = await fetch(`${apiUrl}/getProductsByCategories`, options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (find) {
      fetchProducts();
    }
  }, [find, apiUrl]);
  return (
    <div className={styles.container}>
      <h1>Flower Shop</h1>
      <div className={styles.breadcrumb}>
        Home › Flower Delivery Dubai
      </div>
      <div className={styles.reviews}>
        <span>4.9</span>
        <a href="#reviews">7704 Reviews</a>
      </div>
      {/* <div className={styles.filters}>
        <div className={styles.filterOptions}>
          <select>
            <option>Gift Type</option>
          </select>
          <select>
            <option>Occasion</option>
          </select>
          <select>
            <option>Delivery City</option>
          </select>
          <select>
            <option>Price</option>
          </select>
          <select>
            <option>Delivery Date</option>
          </select>
          <select>
            <option>Sort By</option>
            <option>Recommended</option>
          </select>
        </div>
      </div> */}
      <div className={styles.productList}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            imageUrl2={product.imageUrl2}
            imageUrl3={product.imageUrl3}
          />
        ))}
      </div>
      <div className={styles.whatsapp}>
        <a href="https://wa.me/03347573726" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default ProductCategory;
