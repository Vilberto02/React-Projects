import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 px-4 py-3 rounded-sm flex flex-col gap-4 justify-between h-48">
      <div>
        <h1 className="text-xl font-bold mb-3 text-white capitalize">
          {task.title}
        </h1>
        <p className="text-xs text-gray-400">{task.description}</p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-xs bg-red-500 rounded-md py-1 px-2 text-white cursor-pointer hover:bg-red-400"
      >
        Eliminar
      </button>
    </div>
  );
}
