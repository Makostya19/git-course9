import { useState } from "react";

function Task({ id, title, completed, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEdit(id, value.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className={`${completed ? "completed" : ""} ${isEditing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />

        <label>
          <span className="description">{title}</span>

          <button
            className="icon icon-edit"
            onClick={() => setIsEditing(true)}
          />

          <button
            className="icon icon-destroy"
            onClick={() => onDelete(id)}
          />
        </label>
      </div>

      <input
        className="edit"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus={isEditing}
      />
    </li>
  );
}

export default Task;
