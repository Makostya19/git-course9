import PropTypes from "prop-types";
import TasksFilter from "./TasksFilter";

function Footer({ itemsLeft, filter, setFilter, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> items left
      </span>

      <TasksFilter filter={filter} setFilter={setFilter} />

      <button
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  itemsLeft: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
