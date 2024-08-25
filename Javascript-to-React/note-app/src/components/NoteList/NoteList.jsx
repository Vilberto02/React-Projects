import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import styles from "./NoteList.module.css";

function NoteList({ setModal }, { modal }) {
  return (
    <div className={styles.container}>
      <AddNoteButton setModal={setModal} modal={modal} />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}

export default NoteList;
