import { useState } from "react";

function Task({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const submit = (e) => {
    e.preventDefault();
    onEdit(task.id, value);
    setEditing(false);
  };

  return (
    <li className={`${task.completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label>
          <span className="description">{task.title}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setEditing(true)} />
        <button className="icon icon-destroy" onClick={() => onDelete(task.id)} />
      </div>

      {editing && (
        <form onSubmit={submit}>
          <input
            className="edit"
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={submit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

export default Task;
