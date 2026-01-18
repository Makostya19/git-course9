import Task from "./Task";
import PropTypes from "prop-types";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [],
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
};

export default TaskList;
