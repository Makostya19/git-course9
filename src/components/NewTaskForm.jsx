import { useState } from "react";

function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onAddTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;
