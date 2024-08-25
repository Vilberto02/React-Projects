import React from "react";
import styles from "./Modal.module.css";
import NoteModal from "../NoteModal/NoteModal";

function Modal({ setModal }) {
  return (
    <div className={styles.container}>
      <NoteModal setModal={setModal} />
    </div>
  );
}

export default Modal;
