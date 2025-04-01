
// import React, { useRef } from "react";
// import { useDrop } from "react-dnd";
// import { Task } from "./DndBoard";
// import './tasklane.scss'; 

// interface DropZoneProps {
//   status: Task["status"];
//   onDrop: (taskId: number, newStatus: Task["status"]) => void;
//   children: React.ReactNode;
// }

// const DropZone: React.FC<DropZoneProps> = ({ status, onDrop, children }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [{ isOver, canDrop }, drop] = useDrop({
//     accept: "TASK",
//     drop: (item: { id: number }) => onDrop(item.id, status),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop(),
//     }),
//   });

//   drop(ref);

//   const childrenClass = `${isOver ? (canDrop ? "is-over" : "can-drop") : ""}`;

//   return (
//     <div ref={ref} className="drop-zone">
//       <div className="status-header">
//         {status}
//       </div>
//       <div className={`children-container ${childrenClass}`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default DropZone;


import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { Task } from "./DndBoard";
import './tasklane.scss'; 

interface DropZoneProps {
  status: Task["status"];
  onDrop: (taskId: number, newStatus: Task["status"]) => void;
  children: React.ReactNode;
  draggingTask: number | null;
}

const DropZone: React.FC<DropZoneProps> = ({ status, onDrop, children, draggingTask }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: number }) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  drop(ref);

  const isDragging = draggingTask !== null;
  const isSourceLane =
  draggingTask !== null &&
  React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.props as any).task?.id === draggingTask
  );

  return (
    <div ref={ref} className={`drop-zone ${isOver ? "target-zone" : isDragging ? "highlight-zone" : ""} ${isSourceLane ? "source-zone" : ""}`}>
      <div className="status-header">{status}</div>
      <div className="children-container">{children}</div>
    </div>
  );
};

export default DropZone;


