import { useState, useEffect } from "react";

const Form = () => {
  return (
    <div className="mb-3 w-full flex justify-between">
      <input
        type="text"
        className="px-2 w-full rounded-l-md border border-gray-400 focus:outline-none focus:border-gray-700 focus:border-2"
        placeholder="Enter todo here"
      />
      <button className="h-9 px-3 flex justify-center items-center bg-blue-500 text-white  rounded-r-md">
        Submit
      </button>
    </div>
  );
};

export default Form;
