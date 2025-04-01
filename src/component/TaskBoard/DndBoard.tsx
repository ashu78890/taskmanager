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
