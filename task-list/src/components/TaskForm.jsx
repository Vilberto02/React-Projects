import { useState } from "react";

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titulo de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Descripción"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}
