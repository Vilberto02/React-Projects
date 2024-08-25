import { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import Modal from "./components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <h1 className="title">Note App</h1>
      <NoteList setModal={setModal} />
    </>
  );
}

export default App;
