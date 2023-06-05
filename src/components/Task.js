import React from 'react';

const Task = ({ task, onDelete }) => {
  // Make sure task is defined before trying to access its properties
  if(!task){
    return null;
  }

  const handleDelete = () => {
    onDelete(task.text);
  }

  return (
    <div className="task">
      <div className="text"><p>{task.text}</p></div>
      <div className="category"><p>{task.category}</p></div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;


















