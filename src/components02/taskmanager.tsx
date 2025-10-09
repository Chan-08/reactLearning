import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // 🔹 Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return; // ignore empty input
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // 🔹 Toggle completed status
  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 🔹 Delete a task
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container my-5 col-lg-6 col-md-8 ">
      <h2 className="my-5 text-center">Task Manager</h2>

      {/* Input & Button */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item text-center text-muted">
            No tasks yet. Add one above!
          </li>
        ) : (
          tasks.map(task => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "gray" : "black",
                  }}
                >
                  {task.text}
                </span>
              </div>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
