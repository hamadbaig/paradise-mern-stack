import React from 'react'
import styles from "./ProductTop.module.css";
function ProductTop() {
    const categories = [
        { name: 'Birthday', icon: '🎉' },
        { name: 'Anniversary', icon: '🎂' },
        { name: 'Roses', icon: '🌹' },
        { name: 'Tulips', icon: '🌷' },
        { name: 'Premium', icon: '💎' },
        { name: 'Forever Roses', icon: '🌹' },
        { name: 'Bouquet', icon: '💐' },
        { name: 'New Flowers', icon: '🌸' },
      ];
  return (
    <div className={styles.container}>
      <h1>Flower Shop</h1>
      <p>
        There’s a saying that where flowers bloom, hope reigns. Flowers are the most unique gifts which can be gifted to your near and dear ones for any occasion. You can order flowers online as the presentation of flowers by them is outstanding and therefore forms a big part of gifting. The best part is that everyone cheers up with this amazing gift of flowers and you are never tired of buying and gifting them.
      </p>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div className={styles.category} key={category.name}>
            <div className={styles.icon}>{category.icon}</div>
            <div className={styles.name}>{category.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.breadcrumb}>
        Home › Flower Delivery Dubai
      </div>
      <div className={styles.filters}>
        <div className={styles.reviews}>
          <span>4.9</span>
          <a href="#reviews">7704 Reviews</a>
        </div>
        {/* <div className={styles.filterOptions}>
          <select>
            <option>Gift Type</option>
            {/* Add more options as needed 
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
        </div> */}
      </div>
      {/* <div className={styles.whatsapp}>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div> */}
    </div>
  )
}

export default ProductTop