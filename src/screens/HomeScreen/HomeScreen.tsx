import React from "react";
import styles from "./style.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sideNav}>
        <p>Home</p>
      </nav>
      <section className={styles.section}>
        <button
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Add Wall
        </button>
      </section>
    </div>
  );
};

export default HomeScreen;
