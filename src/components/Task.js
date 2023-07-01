import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      title="Double tap to set or remove reminder!"
      className={`task ${task.reminder ? 'reminder' : ''}`}
      data-id={task.id}
      onDoubleClick={onToggle}
    >
      <h3>{task.text} </h3>
      <FaTimes
        className="task-remove"
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={onDelete}
      />
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
