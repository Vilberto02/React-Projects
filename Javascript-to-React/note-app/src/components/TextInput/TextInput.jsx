import React from "react";
import styles from "./TextInput.module.css";

function TextInput({ placeholder, title, setTitle }) {
  return (
    <>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className={styles.input}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </>
  );
}

export default TextInput;
