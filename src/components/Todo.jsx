import { useState, useEffect } from "react";
import IconButton from "./IconButton";

import deleteImg from "../img/delete.png";
import editImg from "../img/edit.png";
import cancelImg from "../img/cancel.png";
import okImg from "../img/ok.png";

const Todo = ({ id, title, completed, activeTodo, setActiveTodo }) => {
  const [inputValue, setInputValue] = useState(title);

  const handleChangeInputValue = (e) => setInputValue(e.target.value);

  const clickSave = () => {
    if (inputValue !== "") {
      setActiveTodo(null);
    }
  };
  const clickEdit = () => {
    setActiveTodo(id);
    setInputValue(title);
  };
  const clickCancel = () => {
    setActiveTodo(null);
  };
  const clickDelete = () => {
    setActiveTodo(null);
  };

  return (
    <div className="px-2 py-3 flex justify-start gap-x-2 odd:bg-gray-200 border border-t-gray-500 last:border-b-gray-500">
      {id === activeTodo ? (
        <>
          <input
            type="text"
            className="w-full px-2 text-sm border border-gray-400 focus:border-gray-700"
            value={inputValue}
            onChange={handleChangeInputValue}
          />

          <IconButton onClick={clickCancel} icon={cancelImg} bg="bg-gray-400" />
          <IconButton onClick={clickSave} icon={okImg} bg="bg-green-400" />
        </>
      ) : (
        <>
          <input type="checkbox" checked={completed} />
          <h2 className="mr-auto">{title}</h2>

          <IconButton onClick={clickDelete} icon={deleteImg} bg="bg-red-400" />
          <IconButton onClick={clickEdit} icon={editImg} bg="bg-green-400" />
        </>
      )}
    </div>
  );
};

export default Todo;
