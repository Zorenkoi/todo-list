import { useState, useEffect } from "react";

const IconButton = ({ onClick, icon, bg }) => {
  return (
    <button
      className={`w-9 h-7 flex-shrink-0 flex justify-center items-center  rounded ${bg}`}
      onClick={onClick}
    >
      <img className="w-5 h-5" src={icon} alt="" />
    </button>
  );
};

export default IconButton;
