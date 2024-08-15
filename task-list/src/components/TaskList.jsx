import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length == 0) {
    return <h1 className="text-white font-bold text-2xl">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4  gap-2 overflow-auto h-full max-h-96 px-4 py-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
