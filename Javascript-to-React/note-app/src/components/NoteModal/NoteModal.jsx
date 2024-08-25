import React from "react";
import styles from "./NoteModal.module.css";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import Button from "../Button/Button";
import { CgClose } from "react-icons/cg";
import { NoteContext } from "../../context/NoteContext";
import { useContext } from "react";

function NoteModal({ setModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { createNote } = useContext(NoteContext);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dateObj = new Date();
  const dateString = `${dateObj.getDate()} de ${
    months[dateObj.getMonth()]
  }, ${dateObj.getFullYear()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(dateString);
    createNote({
      title,
      description,
      dateString,
    });
    console.log(title, description, date);
    setModal(false);
  };

  return (
    <>
      <form className={styles.popup} onSubmit={handleSubmit}>
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
        <span className={styles.date}>{dateString}</span>
        <Button name="Agregar" />
      </form>
    </>
  );
}

export default NoteModal;
