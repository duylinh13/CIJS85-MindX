// import React, { useState } from "react";
// import Toggle from "./Toggle";
// import Form from "./Form";
// import "./TodoList.css";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("all");

//   const addTodo = (task) => {
//     const newTodo = {
//       id: Date.now(),
//       task: task,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const editTodo = (id, updatedTask) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, task: updatedTask };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const toggleComplete = (id) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className="todo-list-container">
//       <div className={`todo-list ${isDarkMode ? "dark" : "light"}`}>
//         <Toggle toggleMode={toggleMode} isDarkMode={isDarkMode} />
//         <Form
//           addTodo={addTodo}
//           editTodo={editTodo}
//           filterStatus={filterStatus}
//         />
//         <ul>
//           {todos.map((todo) => {
//             if (
//               filterStatus === "all" ||
//               (filterStatus === "completed" && todo.completed) ||
//               (filterStatus === "not completed" && !todo.completed)
//             ) {
//               return (
//                 <li key={todo.id}>
//                   <span
//                     className={todo.completed ? "completed" : ""}
//                     onClick={() => toggleComplete(todo.id)}
//                   >
//                     {todo.task}
//                   </span>
//                   <button onClick={() => editTodo(todo.id, todo.task)}>
//                     Edit
//                   </button>
//                   <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                 </li>
//               );
//             }
//             return null;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import Toggle from "./Toggle";
import Form from "./Form";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filterTodos = () => {
    switch (filterStatus) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "not completed":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className={`todo-list-container ${isDarkMode ? "dark" : "light"}`}>
      <Toggle toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <Form
        addTodo={addTodo}
        editTodo={editTodo}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <ul>
        {filterTodos().map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.task}
            </span>
            <button onClick={() => editTodo(todo.id, todo.task)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
