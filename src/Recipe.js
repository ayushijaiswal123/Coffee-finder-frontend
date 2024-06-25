import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, desc, image, addr, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img src={image} className={styles.card__image} alt={title} />
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{desc}</p>
      </div>
      <button className={styles.card__btn}>Know More</button>
    </div>
  );
};

export default Recipe;

