import React from "react";
import DropZone from "./TaskLane";
import TaskCard from "./TaskCard";
import './dndboard.scss'; 

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
  return (
    <div className="dnd-board">
      {["todo", "in-progress", "done", "canceled", "closed"].map((status) => (
        <div key={status} className="task-lane">
          <DropZone status={status as Task["status"]} onDrop={moveTask}>
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
