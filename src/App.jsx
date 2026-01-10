import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Completed task",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Active task",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) {
      setTasks(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, title) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const itemsLeft = tasks.filter((task) => !task.completed).length;

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

      <Footer
        itemsLeft={itemsLeft}
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
