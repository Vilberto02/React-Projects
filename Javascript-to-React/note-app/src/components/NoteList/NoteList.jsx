import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import styles from "./NoteList.module.css";
import { NoteContext } from "../../context/NoteContext";
import { useContext } from "react";

function NoteList({ setModal }) {
  const { notes } = useContext(NoteContext);

  return (
    <div className={styles.container}>
      <AddNoteButton setModal={setModal} />
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} setModal={setModal} />
      ))}
    </div>
  );
}

export default NoteList;
