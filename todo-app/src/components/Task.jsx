function Task({ title, completed }) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} readOnly />
        <label>
          <span className="description">{title}</span>
          <span className="created">created</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

export default Task;
