import React from "react";
import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import styles from "./NoteCard.module.css";

function NoteCard() {
  const [settings, setSettings] = useState(false);

  const SettingsMenu = () => (
    <div className={`${styles.settings} ${settings ? styles.show : ""}`}>
      <ul className={styles.menu}>
        <li
          onClick={() => {
            console.log("edit");
            setSettings(!settings);
          }}
        >
          Edit
        </li>
        <li
          onClick={() => {
            console.log("delete");
            setSettings(!settings);
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Titulo</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          labore tempore cupiditate?
        </p>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>23 de Abril, 2024</span>
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
