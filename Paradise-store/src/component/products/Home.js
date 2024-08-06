import React from "react";
import styles from "./Home.module.css";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <div className={styles.color}>
        <h2 className={styles.heading}>Shop by category</h2>
        <div className={styles.home}>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>{" "}
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>{" "}
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>{" "}
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>{" "}
            <div>Birthday</div>
          </div>
          <div className={styles.category}>
            <div className={styles.catdiv}>
              <LiaBirthdayCakeSolid className={styles.icon} />
            </div>{" "}
            <div>Birthday</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
