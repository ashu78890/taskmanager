// // import React, { useRef } from "react";
// // import { useDrag } from "react-dnd";
// // import { Task } from "./DndBoard";
// // import './taskcard.scss'; 

// // const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
// //   const ref = useRef<HTMLDivElement>(null);

// //   const [{ isDragging }, drag] = useDrag({
// //     type: "TASK",
// //     item: { id: task.id },
// //     collect: (monitor) => ({
// //       isDragging: monitor.isDragging(),
// //     }),
// //   });

// //   drag(ref); 

// //   return (
// //     <div
// //       ref={ref} 
// //       className={`task-card ${isDragging ? "is-dragging" : ""}`}
// //     >
// //       {task.text}
// //     </div>
// //   );
// // };

// // export default TaskCard;

// import React, { useState, useRef } from "react";
// import { useDrag } from "react-dnd";
// import { Task } from "./DndBoard";
// import "./taskcard.scss";
// import Tooltip from "../Tooltip/Tooltip";

// const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLSpanElement>(null);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK",
//     item: { id: task.id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   drag(ref);

//   // Handle tooltip position only for the header
//   const handleMouseEnter = (e: React.MouseEvent) => {
//     if (headerRef.current) {
//       const rect = headerRef.current.getBoundingClientRect();
//       setTooltipPosition({
//         top: rect.top - 30, // Position above header
//         left: rect.left + rect.width/2, // Center tooltip
//       });
//       setShowTooltip(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setShowTooltip(false);
//   };

//   return (
//     <>
//       <div ref={ref} className={`task-card ${isDragging ? "is-dragging" : ""}`}>
//        <div className="space-between">
//         <span
//           ref={headerRef}
//           className="task-text"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {task.text}
//         </span>

//         {/* Other card content */}
//         <p className="task-description">Some additional details...</p>
//       </div>
//       </div>

//       {showTooltip && (
//         <div
//           className="custom-tooltip"
//           style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
//         >
//           {task.text}
//         </div>
//       )}
//     </>
//   );
// };

// export default TaskCard;

import React, { useState, useRef, useEffect } from "react";

import { useDrag } from "react-dnd";
import { Task } from "./DndBoard";
import "./taskcard.scss";
import Tooltip from "../Tooltip/Tooltip";
import CustomTooltip from "../Tooltip/Tooltip";
import { getEmptyImage } from "react-dnd-html5-backend";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const [{ isDragging }, drag,preview] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  // Check if text is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        setIsOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow); // Re-check on resize

    return () => window.removeEventListener("resize", checkOverflow);
  }, [task.text]);

  // Handle tooltip positioning
  const handleMouseEnter = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 30, // Position above text
        left: rect.left + rect.width / 2, // Centered
      });
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => setShowTooltip(false);

  


  return (
    <>
      <div ref={ref} className={`task-card ${isDragging ? "is-dragging" : ""}`}>
        <div className="space-between">
            <Tooltip text={task.text}>
          <span
            
          >
            {task.text}
          </span>
          </Tooltip>
         

          {/* Other card content */}
          <p className="task-description">Some additional details...</p>
        </div>
      </div>

      {showTooltip && (
        <div className="custom-tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
          {task.text}
        </div>
      )}
    </>
  );
};

export default TaskCard;



