import React from "react";
import { useState } from "react";
import { CgMoreVerticalAlt, CgTrash, CgPen } from "react-icons/cg";
import styles from "./NoteCard.module.css";
import { NoteContext } from "../../context/NoteContext";
import { useContext } from "react";

function NoteCard({ note, setModal }) {
  const [settings, setSettings] = useState(false);
  const { deleteNote } = useContext(NoteContext);

  const SettingsMenu = () => (
    <div className={`${styles.settings} ${settings ? styles.show : ""}`}>
      <ul className={styles.menu}>
        <li
          onClick={() => {
            console.log("edit");
            setSettings(!settings);
            setModal(true);
          }}
          className={styles.item__menu}
        >
          <CgPen />
          <p>Edit</p>
        </li>
        <li
          onClick={() => {
            console.log("delete");
            setSettings(!settings);
            deleteNote(note.id);
          }}
          className={styles.item__menu}
        >
          <CgTrash />
          <p>Delete</p>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.description}>{note.description}</p>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>{note.date}</span>
        {<SettingsMenu />}
        <span
          className={styles.more}
          onClick={() => {
            setSettings(!settings);
          }}
        >
          <CgMoreVerticalAlt fontSize="24" color="#ccc" />
        </span>
      </div>
    </div>
  );
}

export default NoteCard;
