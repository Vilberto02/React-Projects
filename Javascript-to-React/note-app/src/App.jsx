import { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import Modal from "./components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <NoteList setModal={setModal} modal={modal} />
    </>
  );
}

export default App;
