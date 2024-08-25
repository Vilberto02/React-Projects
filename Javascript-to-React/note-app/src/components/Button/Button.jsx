import React from "react";
import styles from "./Buttons.module.css";

function Button({ name }) {
  return (
    <>
      <button className={styles.btn}>{`${name}`}</button>
    </>
  );
}

export default Button;
