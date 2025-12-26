import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Completed task", completed: true, createdAt: new Date() },
    { id: 2, title: "Active task", completed: false, createdAt: new Date() },
  ]);

  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
    }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id, title) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, title } : t
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </section>

      {tasks.length > 0 && (
        <Footer
          activeCount={activeCount}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />
      )}
    </section>
  );
}

export default App;
