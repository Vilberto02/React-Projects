import React from "react";
import { createContext, useEffect, useState } from "react";
import { list_notes as data } from "../data/notes";

export const NoteContext = createContext();

function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  function createNote(note) {
    setNotes([
      ...notes,
      {
        id: notes.length,
        title: note.title,
        description: note.description,
        date: note.dateString,
      },
    ]);
  }

  function updateNote(updatedNote) {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  }

  function deleteNote(noteID) {
    setNotes(notes.filter((note) => note.id !== noteID));
  }

  return (
    <NoteContext.Provider value={{ notes, createNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContextProvider;
