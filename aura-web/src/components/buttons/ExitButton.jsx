import React from "react";
import { FaXmark } from "react-icons/fa6";

function ExitButton() {
  const handleExit = () => {
    // add exit animation to whole page
    document.body.classList.add("page-exit");

    // wait for animation to finish
    setTimeout(() => {
      window.location.href = "/";
    }, 300);
  };
  return (
    <div>
      <button
        onClick={() => handleExit()}
        className="absolute btn bg-base-300 border border-gray-600 top-4 right-4 transition duration-300 ease-in-out rounded-full"
      >
        <FaXmark size={24} />
      </button>
    </div>
  );
}

export default ExitButton;
