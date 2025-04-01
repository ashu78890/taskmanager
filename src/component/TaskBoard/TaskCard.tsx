import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { Task } from "./DndBoard";
import './taskcard.scss'; 

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref); 

  return (
    <div
      ref={ref} 
      className={`task-card ${isDragging ? "is-dragging" : ""}`}
    >
      {task.text}
    </div>
  );
};

export default TaskCard;
