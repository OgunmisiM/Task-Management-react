import React, { useState } from 'react';
import './style.css';

function TaskManagement() {
  // Sample task data
  const initialTasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Complete task 1',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Finish task 2',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Review task 3',
      status: 'Completed',
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <div>
              Status: {task.status}
              <button
                onClick={() => handleTaskStatusChange(task.id, 'In Progress')}
              >
                Mark as In Progress
              </button>
              <button
                onClick={() => handleTaskStatusChange(task.id, 'Completed')}
              >
                Mark as Completed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagement;
