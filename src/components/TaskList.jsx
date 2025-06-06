import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { users, selectedUser, addTask } = useTaskContext();
  const [input, setInput] = useState("");
  const user = users[selectedUser];

  if (!user) return null;

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <h1 id="mainTitle">Tareas de {user.name}</h1>
      <ul id="taskList">
        {user.tasks.length === 0 ? (
          <li>No hay tareas.</li>
        ) : (
          user.tasks.map((t, i) => <TaskItem key={i} task={t} idx={i} />)
        )}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          id="newTaskInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button>Añadir Tarea</button>
      </form>
    </div>
  );
}
