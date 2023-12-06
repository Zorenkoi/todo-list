import { useState, useEffect } from "react";
import Todo from "./Todo";

const todos = [
  {
    id: 1,
    title: "Задача 1",
    completed: false,
  },
  {
    id: 2,
    title: "Задача 2",
    completed: true,
  },
  {
    id: 3,
    title: "Задача 3",
    completed: false,
  },
  {
    id: 4,
    title: "Задача 4",
    completed: false,
  },
];

const TodoList = () => {
  const [activeTodo, setActiveTodo] = useState(null);

  return (
    <div className="flex flex-col border border-x-gray-500">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            activeTodo={activeTodo}
            setActiveTodo={setActiveTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
