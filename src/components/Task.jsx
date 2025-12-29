import { useState } from "react";

function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, value);
    setIsEditing(false);
  };

  let className = "";
  if (task.completed) className += " completed";
  if (isEditing) className += " editing";

  return (
    <li className={className}>
      {!isEditing && (
        <>
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />

          <label>
            {task.title}
          </label>

          <button
            className="icon icon-edit"
            onClick={() => setIsEditing(true)}
          />

          <button
            className="icon icon-destroy"
            onClick={() => onDelete(task.id)}
          />
        </>
      )}

      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            className="edit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSubmit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

export default Task;
