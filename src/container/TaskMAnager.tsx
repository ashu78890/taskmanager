// import React, { useCallback, useState } from "react";
// import FilterComponent from "../component/FilterComponent/FilterComponent";
// import { Filters, Option } from "../component/FilterComponent/FilterComponent";
// import DndBoard from "../component/TaskBoard/DndBoard";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { Task } from "../component/TaskBoard/DndBoard";
// const initialTasks: Task[] = [
//     { id: 1, text: "Task 1", status: "todo" },
//     { id: 2, text: "Task 2", status: "in-progress" },
//     { id: 3, text: "Task 3", status: "done" },
//     { id: 4, text: "Task 4", status: "canceled" },
//     { id: 5, text: "Task 5", status: "closed" },
//     { id: 6, text: "Task 6", status: "todo" },
//     { id: 7, text: "Task 7", status: "in-progress" },
//     { id: 8, text: "Task 8", status: "done" },
//     { id: 9, text: "Task 9", status: "canceled" },
//     { id: 10, text: "Task 10", status: "closed" },
//   ];

// const TaskManager: React.FC = () => {
//     const [tasks, setTasks] = useState<Task[]>(initialTasks);
//     console.log(tasks,"sd")

//   const [filters, setFilters] = useState<Filters>({
//     category: [],
//     brand: [],
//     price: [],
//     rating: [],
//     availability: [],
//   });

//   console.log(filters,"sd")

//   const moveTask = useCallback((taskId: number, newStatus: Task["status"]) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   }, []);

//   const handleFilterChange = (name: keyof Filters, value: Option[]) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
//       <DndProvider backend={HTML5Backend}>
//       <div style={{ padding: "20px" }}>
//         <DndBoard tasks={tasks} moveTask={moveTask} />
//       </div>
//     </DndProvider>
//     </div>
//   );
// };

// export default TaskManager


import React, { useState } from "react";
import FilterComponent from "../component/FilterComponent/FilterComponent";
import { Filters, Option } from "../component/FilterComponent/FilterComponent";
import DndBoard from "../component/TaskBoard/DndBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Task } from "../component/TaskBoard/DndBoard";
import CustomDragLayer from "../component/TaskBoard/CustomDragLayer";

const initialTasks: Task[] = [
    { id: 1, text: "Task 1", status: "todo" },
    { id: 6, text: "Task 1 sadhsdsdjjkjkhjkjjkhjhjhjsdvdvv", status: "todo" },
    { id: 2, text: "Task 2", status: "in-progress" },
    { id: 3, text: "Task 3", status: "done" },
    { id: 4, text: "Task 4", status: "canceled" },
    { id: 5, text: "Task 5", status: "closed" },
];

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filters, setFilters] = useState<Filters>({
        category: [],
        brand: [],
        price: [],
        rating: [],
        availability: [],
        dateRange: [null, null],
        searchTerm: "",
    });
   console.log(filters,"shj")
    const moveTask = (taskId: number, newStatus: Task["status"]) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    // const handleFilterChange = (name: keyof Filters, value: Option[] | string | null) => {
    //     setFilters((prevFilters) => ({
    //         ...prevFilters,
    //         [name]: value,
    //     }));
    // };
    const handleFilterChange = (name: keyof Filters, value: string |  [Date | null, Date | null] | Option[] | null) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

   

    return (
        <div style={{ padding: "20px" }}>
            <div className="banner"></div>
            <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
            <DndProvider backend={HTML5Backend}>
                <CustomDragLayer/>
                    <DndBoard tasks={tasks} moveTask={moveTask} />
            </DndProvider>
        </div>
    );
};

export default TaskManager;


