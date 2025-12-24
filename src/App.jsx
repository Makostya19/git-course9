import { useState } from "react";
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
      title: "Editing task",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const addTask = (title) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, title: newTitle };
        }
        return task;
      })
    );
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </section>

      <Footer />
    </section>
  );
}

export default App;
