import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

function App() {
  const tasks = [
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
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList tasks={tasks} />
      </section>

      <Footer />
    </section>
  );
}

export default App;
