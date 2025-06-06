import { useTaskContext } from "../contexts/TaskContext";

export default function Sidebar() {
  const { users, selectedUser, theme, toggleTheme } = useTaskContext();
  const user = users[selectedUser];

  return (
    <aside className="sidebar card">
      <h2>Usuarios</h2>
      {user ? (
        <div id="userInfo">
          <hr />
          <p id="userName">{user.name}</p>
          <p id="userStats">
            Tareas: {user.tasks.filter((t) => t.completed).length} / {user.tasks.length} completadas
          </p>
        </div>
      ) : (
        <div id="userInfo">
          <p>Selecciona un usuario</p>
        </div>
      )}
      <button onClick={toggleTheme} style={{ marginTop: "auto" }}>
        {theme === "light" ? "🌙" : "☀️"} Tema
      </button>
    </aside>
  );
}
