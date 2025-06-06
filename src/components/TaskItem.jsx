import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";

export default function TaskItem({ task, idx }) {
  const { toggleTask, deleteTask, editTask } = useTaskContext();
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(task.text);

  const handleEdit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      editTask(idx, input.trim());
      setEditing(false);
    }
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {editing ? (
        <form onSubmit={handleEdit} style={{ display: "inline" }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
        </form>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => toggleTask(idx)}
          >
            {task.text}
          </span>
          <button onClick={() => setEditing(true)}>✏️</button>
          <button onClick={() => deleteTask(idx)}>🗑️</button>
        </>
      )}
    </li>
  );
}
