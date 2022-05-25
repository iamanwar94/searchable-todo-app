import React from "react";

const TodoList = ({ todo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg">
      <div className="px-6 py-4">
        <div className="text-green-600 text-xl mb-2">{todo.title}</div>
        <ul>
          <li>
            <strong>Status: </strong>
            {todo.completed ? "Completed" : "Incomplete"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
