import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS.map((task, i) => ({...task, id: i}))); // Add unique ID
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, {...newTask, id: Date.now()}]); // Use timestamp as ID for uniqueness
  }

  function handleRemoveTask(taskToRemove) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToRemove.id)); // Use ID for removal
  }

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleRemoveTask} />
    </div>
  );
}

export default App;

