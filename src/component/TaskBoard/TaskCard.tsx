// import React, { useRef } from "react";
// import { useDrag } from "react-dnd";
// import { Task } from "./DndBoard";
// import './taskcard.scss'; 

// const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK",
//     item: { id: task.id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   drag(ref); 

//   return (
//     <div
//       ref={ref} 
//       className={`task-card ${isDragging ? "is-dragging" : ""}`}
//     >
//       {task.text}
//     </div>
//   );
// };

// export default TaskCard;

import React, { useState, useRef } from "react";
import { useDrag } from "react-dnd";
import { Task } from "./DndBoard";
import "./taskcard.scss";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  // Handle tooltip position only for the header
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 30, // Position above header
        left: rect.left + rect.width/2, // Center tooltip
      });
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div ref={ref} className={`task-card ${isDragging ? "is-dragging" : ""}`}>
        {/* Card Header (Only this will show tooltip) */}
        <span
          ref={headerRef}
          className="task-text"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {task.text}
        </span>

        {/* Other card content */}
        <p className="task-description">Some additional details...</p>
      </div>

      {showTooltip && (
        <div
          className="custom-tooltip"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
        >
          {task.text}
        </div>
      )}
    </>
  );
};

export default TaskCard;


