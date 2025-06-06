import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";

export default function UserList() {
  const { users, selectedUser, addUser, selectUser, removeUser } = useTaskContext();
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addUser(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <ul id="userList">
        {users.length === 0 ? (
          <li>No hay usuarios.</li>
        ) : (
          users.map((u, i) => (
            <li
              key={i}
              style={{
                cursor: "pointer",
                fontWeight: selectedUser === i ? "bold" : "normal",
              }}
              onClick={() => selectUser(i)}
            >
              {u.name}
              <button onClick={(e) => { e.stopPropagation(); removeUser(i); }}>🗑️</button>
            </li>
          ))
        )}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          id="newUserInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nuevo usuario..."
        />
        <button>Añadir Usuario</button>
      </form>
    </div>
  );
}
