import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [theme, setTheme] = useState("light");

  // User actions
  const addUser = (name) => setUsers([...users, { name, tasks: [] }]);
  const selectUser = (idx) => setSelectedUser(idx);
  const removeUser = (idx) => {
    setUsers(users.filter((_, i) => i !== idx));
    if (selectedUser === idx) setSelectedUser(null);
  };

  // Task actions
  const addTask = (text) => {
    if (selectedUser === null) return;
    setUsers(users.map((u, i) =>
      i === selectedUser
        ? { ...u, tasks: [...u.tasks, { text, completed: false }] }
        : u
    ));
  };
  const toggleTask = (taskIdx) => {
    setUsers(users.map((u, i) =>
      i === selectedUser
        ? {
            ...u,
            tasks: u.tasks.map((t, j) =>
              j === taskIdx ? { ...t, completed: !t.completed } : t
            ),
          }
        : u
    ));
  };
  const deleteTask = (taskIdx) => {
    setUsers(users.map((u, i) =>
      i === selectedUser
        ? { ...u, tasks: u.tasks.filter((_, j) => j !== taskIdx) }
        : u
    ));
  };
  const editTask = (taskIdx, text) => {
    setUsers(users.map((u, i) =>
      i === selectedUser
        ? {
            ...u,
            tasks: u.tasks.map((t, j) =>
              j === taskIdx ? { ...t, text } : t
            ),
          }
        : u
    ));
  };

  // Theme
  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <TaskContext.Provider
      value={{
        users,
        selectedUser,
        theme,
        addUser,
        selectUser,
        removeUser,
        addTask,
        toggleTask,
        deleteTask,
        editTask,
        toggleTheme,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
