import React, { useEffect, useState } from "react";
import { getTaskList } from "../../services/task";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let mounted = true;
    getTaskList().then((tasks) => {
      if (mounted) {
        setTasks(tasks);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="">
      <h1>My Grocery List</h1>
      <ul>
        {tasks.map((item) => (
          <li key={item.item}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Task;
