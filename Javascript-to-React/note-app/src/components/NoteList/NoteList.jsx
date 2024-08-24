import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import styles from "./NoteList.module.css";

function NoteList() {
  return (
    <div className={styles.container}>
      <AddNoteButton />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}

export default NoteList;
