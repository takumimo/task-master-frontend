import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task.title}
      </span>
    </li>
  );
};

export default TaskItem;
