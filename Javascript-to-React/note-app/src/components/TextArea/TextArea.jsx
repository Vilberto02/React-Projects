import React from "react";
import styles from "./TextArea.module.css";

function TextArea({ placeholder, description, setDescription }) {
  return (
    <>
      <textarea
        name="description"
        placeholder={`${placeholder}`}
        className={styles.textarea}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
    </>
  );
}

export default TextArea;
