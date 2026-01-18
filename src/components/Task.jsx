import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

function Task({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const submit = (e) => {
    e.preventDefault();
    onEdit(task.id, value);
    setEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {!editing && (
        <>
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />

          <label onDoubleClick={() => setEditing(true)}>
            {task.title}
            <span className="created">
              {" "}
              created{" "}
              {formatDistanceToNow(new Date(task.createdAt), {
                addSuffix: true,
              })}
            </span>
          </label>

          <button
            className="icon icon-edit"
            onClick={() => setEditing(true)}
          />

          <button
            className="icon icon-destroy"
            onClick={() => onDelete(task.id)}
          />
        </>
      )}

      {editing && (
        <form onSubmit={submit}>
          <input
            className="edit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={submit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }),
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

Task.defaultProps = {
  task: {
    id: 0,
    title: "",
    completed: false,
    createdAt: new Date(),
  },
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
};

export default Task;
