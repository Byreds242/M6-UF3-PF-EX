import { TaskProvider, useTaskContext } from "./contexts/TaskContext";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import TaskList from "./components/TaskList";
import "./App.css";

function Main() {
  const { theme } = useTaskContext();
  return (
    <div className={`app ${theme}`}>
      <Sidebar />
      <main className="main">
        <div className="card">
          <UserList />
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  );
}
