import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-2xl mt-10 px-4 mx-auto">
      <div className="rounded-lg border border-gray-500 overflow-hidden">
        <div className="p-3 bg-gray-100 font-bold text-lg text-gray-700">
          Todos(5)
        </div>

        <div className="p-3">
          <Form />

          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
