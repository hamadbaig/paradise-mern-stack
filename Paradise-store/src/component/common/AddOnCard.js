import { useState, useEffect } from "react";
import styles from "./AddOnCard.module.css"; // Assuming your CSS module is named AddOnCard.module.css

const AddOnCard = ({ name, price, imageUrl, imageUrl2, imageUrl3 }) => {
  const images = [imageUrl, imageUrl2, imageUrl3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardpic}>
          <img src={images[currentImageIndex]} className={styles.logoimg} alt={name} />
        </div>
        <h3>{name}</h3>
        <h3 className={styles.price}>{price}</h3>
        <div className={styles.btnDiv}>
          <button className={styles.button}>+ ADD</button>
        </div>
      </div>
    </>
  );
};

export default AddOnCard;
