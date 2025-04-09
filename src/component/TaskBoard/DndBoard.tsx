// import React, { useEffect, useRef, useState } from "react";
// import DropZone from "./TaskLane";
// import TaskCard from "./TaskCard";
// import './dndboard.scss'; 
// import { useDragDropManager } from "react-dnd";

// export interface Task {
//   id: number;
//   text: string;
//   status: "todo" | "in-progress" | "done" | "canceled" | "closed";
// }

// interface DndBoardProps {
//   tasks: Task[];
//   moveTask: (taskId: number, newStatus: Task["status"]) => void;
// }

// const DndBoard: React.FC<DndBoardProps> = React.memo(({ tasks, moveTask }) => {

//     const [draggingTask, setDraggingTask] = useState<number | null>(null);
//     const dragDropManager = useDragDropManager();

//     useEffect(() => {
//       const monitor = dragDropManager.getMonitor();
//       const unsubscribe = monitor.subscribeToStateChange(() => {
//         const draggingItem = monitor.getItem();
//         setDraggingTask(draggingItem ? draggingItem.id : null);
//       });
    
//       return () => unsubscribe(); // Cleanup on unmount
//     }, [dragDropManager]);
//     const [maxHeight, setMaxHeight] = useState<any>(0);
// const laneRefs = useRef<(HTMLDivElement | null)[]>([]);

// // useEffect(() => {
// //     requestAnimationFrame(() => {
// //         const heights = laneRefs.current.map(ref => ref?.offsetHeight || 275);
// //         const tallest = Math.max(...heights,275);

// //         console.log("Lane Heights:", heights);
// //         console.log("Tallest Lane:", tallest);

      
// //             setMaxHeight(tallest);
// //     }); 
// // }, [tasks]);
  
//   return (
//     <div className="dnd-board">
//       {["todo", "in-progress", "done", "canceled", "closed"].map((status,index) => (
//         <div key={status} className="task-lane">
//           <DropZone status={status as Task["status"]} onDrop={moveTask} draggingTask={draggingTask}>
//             {tasks
//               .filter((task) => task.status === status)
//               .map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//           </DropZone>
//         </div>
//       ))}
//     </div>
//   );
// });

// export default DndBoard;


import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const monitor = dragDropManager.getMonitor();
    const unsubscribe = monitor.subscribeToStateChange(() => {
      const draggingItem = monitor.getItem();
      setDraggingTask(draggingItem ? draggingItem.id : null);
    });

    return () => unsubscribe(); // Cleanup
  }, [dragDropManager]);

  // Custom drop rules
  const isTaskAllowed = (taskId: number, status: Task["status"]) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return false;

    // Example logic: disallow moving "done" → "todo"
    if (task.status === "done" && status === "todo") return false;

    // Disallow moving canceled to anything other than closed
    if (task.status === "canceled" && status !== "closed") return false;

    return true;
  };

  return (
    <div className="dnd-board">
      {["todo", "in-progress", "done", "canceled", "closed"].map((status) => (
        <div key={status} className="task-lane">
          <DropZone
            status={status as Task["status"]}
            onDrop={moveTask}
            draggingTask={draggingTask}
            isTaskAllowed={isTaskAllowed}
          >
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

