import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
  };

  return (
    <div className="max-w-md mx-auto py-3">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 px-6 py-4 rounded-sm"
      >
        <h1 className="text-white font-bold mb-4 text-2xl">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 rounded-sm px-4 py-3 outline-none text-xs w-full mb-4"
        />
        <textarea
          placeholder="Descripción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 rounded-sm resize-none h-24 px-4 py-3 outline-none text-xs w-full mb-4"
        ></textarea>
        <button className="bg-indigo-500 text-xs px-6 py-2 text-white rounded-md hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}
