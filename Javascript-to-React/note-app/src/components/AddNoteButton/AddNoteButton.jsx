import React from "react";
import styles from "./AddNoteButton.module.css";
import { CgMathPlus } from "react-icons/cg";

function AddNoteButton() {
  return (
    <div className={styles.container}>
      <div className={styles.add__btn}>
        <CgMathPlus fontSize="32" color="#324a5e" />
      </div>
      <p>Add Note</p>
    </div>
  );
}

export default AddNoteButton;
