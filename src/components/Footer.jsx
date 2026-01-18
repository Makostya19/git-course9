import PropTypes from "prop-types";

function Footer({ itemsLeft, filter, setFilter, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  itemsLeft: PropTypes.number,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

Footer.defaultProps = {
  itemsLeft: 0,
  filter: "all",
  setFilter: () => {},
  onClearCompleted: () => {},
};

export default Footer;
