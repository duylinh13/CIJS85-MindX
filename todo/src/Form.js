import React, { useState } from "react";
import "./Form.css";

const Form = ({ addTodo, editTodo, filterStatus }) => {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editId !== null) {
        editTodo(editId, task);
        setEditId(null);
      } else {
        addTodo(task);
      }
      setTask("");
    }
  };

  const handleEdit = (id, currentTask) => {
    setEditId(id);
    setTask(currentTask);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <input
          className="head-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New Task"
        />
      </div>
      <button type="submit" className="head-btn">
        {editId !== null ? "Update" : "Add"}
      </button>
      <div>
        <ul>
          {todos.map((todo) => {
            if (
              filterStatus === "all" ||
              (filterStatus === "completed" && todo.completed) ||
              (filterStatus === "not completed" && !todo.completed)
            ) {
              return (
                <li key={todo.id}>
                  <span
                    className={todo.completed ? "completed" : ""}
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.task}
                  </span>
                  <button
                    onClick={() => handleEdit(todo.id, todo.task)}
                    disabled={editId !== null}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </form>
  );
};

export default Form;
