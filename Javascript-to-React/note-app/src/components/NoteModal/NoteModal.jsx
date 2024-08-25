import React from "react";
import styles from "./NoteModal.module.css";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import Button from "../Button/Button";
import { CgClose } from "react-icons/cg";

function NoteModal({ setModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className={styles.popup}>
        <div className={styles.container__option}>
          <h3 className={styles.title__option}>Agregar nota</h3>
          <CgClose
            className={styles.close__icon}
            onClick={() => {
              setModal(false);
            }}
          />
        </div>
        <div className={styles.container__title}>
          <p className={styles.title__item}>Titulo</p>
          <TextInput placeholder="Titulo" title={title} setTitle={setTitle} />
        </div>
        <div className={styles.container__description}>
          <p className={styles.description__item}>Descripcion</p>
          <TextArea
            placeholder="Descripción"
            description={description}
            setDescription={setDescription}
          />
        </div>
        <span className={styles.date}>23 de Abril, 2024</span>
        <Button
          name="Agregar"
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </>
  );
}

export default NoteModal;
