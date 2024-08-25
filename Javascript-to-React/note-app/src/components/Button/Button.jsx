import React from "react";
import styles from "./Buttons.module.css";

function Button({ name, title, setTitle, description, setDescription }) {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          console.log(title, description);
          setTitle("");
          setDescription("");
        }}
      >{`${name}`}</button>
    </>
  );
}

export default Button;
