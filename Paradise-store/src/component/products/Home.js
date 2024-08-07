"use client"
import React from "react";
import { useState, useEffect } from "react";

import styles from "./Home.module.css";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Home = () => {
  const images = [ "https://www.fnp.ae/assets/images/custom/August%20Birthdy_Dsite.jpg", "https://www.fnp.ae/assets/images/custom/branded%20gifts.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);
  return (
    <>
      <div className={styles.color}>
        <div className={`${styles.hero} ${styles.cat}`}>
          <img src={images[currentImageIndex]} alt="hero slider "/>
        </div>
        <h2 className={styles.heading}>Shop by category</h2>
        <div className={styles.home}>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/60_minutes_square.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>60 Minutes</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/combos-22624.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>Combos</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/flowers-22624.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>Flowers</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/birthday-22624.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/rakhi-2.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>Rakhi</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              {/* <LiaBirthdayCakeSolid className={styles.icon} /> */}
              <img src="https://www.fnp.ae/assets/images/custom/cakes-22624.jpg" alt="timer" className={styles.catDivImg}/>
            </div>
            <div>Cakes</div>
          </div>
          
          
        </div>
      </div>
    </>
  );
};
export default Home;
