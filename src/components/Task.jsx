import { useState } from "react";

function Task({ task, onToggle, onDelete, onEdit }) {
  const { id, title, completed } = task;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEdit(id, value.trim());
      setEditing(false);
    }
  };

  return (
    <li className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />

        <label onDoubleClick={() => setEditing(true)}>
          <span className="description">{title}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => setEditing(true)}
        />

        <button
          className="icon icon-destroy"
          onClick={() => onDelete(id)}
        />
      </div>

      <input
        className="edit"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setEditing(false)}
        autoFocus
      />
    </li>
  );
}

export default Task;
