import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </ul>
  );
}

export default TaskList;
