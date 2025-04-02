import React, { useState } from "react";
import DropZone from "./TaskLane";
import TaskCard from "./TaskCard";
import './dndboard.scss'; 
import { useDragDropManager } from "react-dnd";

export interface Task {
  id: number;
  text: string;
  status: "todo" | "in-progress" | "done" | "canceled" | "closed";
}

interface DndBoardProps {
  tasks: Task[];
  moveTask: (taskId: number, newStatus: Task["status"]) => void;
}

const DndBoard: React.FC<DndBoardProps> = React.memo(({ tasks, moveTask }) => {

    const [draggingTask, setDraggingTask] = useState<number | null>(null);
    const dragDropManager = useDragDropManager();
    dragDropManager.getMonitor().subscribeToStateChange(() => {
    const draggingItem = dragDropManager.getMonitor().getItem();
    setDraggingTask(draggingItem ? draggingItem.id : null);
  });
  return (
    <div className="dnd-board">
      {["todo", "in-progress", "done", "canceled", "closed"].map((status) => (
        <div key={status} className="task-lane">
          <DropZone status={status as Task["status"]} onDrop={moveTask} draggingTask={draggingTask}>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </DropZone>
        </div>
      ))}
    </div>
  );
});

export default DndBoard;


// import React, { useRef } from "react";
// import { useDrop } from "react-dnd";
// import { Task } from "./DndBoard";
// import styles from "./tasklane.module.scss"; // Import as a module

// interface DropZoneProps {
//   status: Task["status"];
//   onDrop: (taskId: number, newStatus: Task["status"]) => void;
//   children: React.ReactNode;
//   draggingTask: number | null;
// }

// const DropZone: React.FC<DropZoneProps> = ({ status, onDrop, children, draggingTask }) => {
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

//   const isDragging = draggingTask !== null;
//   const isSourceLane =
//     draggingTask !== null &&
//     React.Children.toArray(children).some(
//       (child: any) => child.props.task.id === draggingTask
//     );

//   return (
//     <div
//       ref={ref}
//       className={`${styles.dropZone} ${isOver ? styles.targetZone : isDragging ? styles.highlightZone : ""} ${isSourceLane ? styles.sourceZone : ""}`}
//     >
//       <div className={styles.statusHeader}>{status}</div>
//       <div className={styles.childrenContainer}>{children}</div>
//     </div>
//   );
// };

// export default DropZone;
