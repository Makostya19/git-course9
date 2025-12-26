function Footer({ activeCount, filter, onFilterChange, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => onFilterChange("all")}
          >All</button>
        </li>
        <li>
          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => onFilterChange("active")}
          >Active</button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => onFilterChange("completed")}
          >Completed</button>
        </li>
      </ul>

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
