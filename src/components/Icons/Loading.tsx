import React from "react";

function Loading() {
  return (
    <div className="py-10 flex justify-center items-center w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 22 22"
        className="animate-spin"
      >
        <path
          stroke="#a5a5a5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 1v4m0 12v4M3.93 3.93l2.83 2.83m8.48 8.48l2.83 2.83M1 11h4m12 0h4M3.93 18.07l2.83-2.83m8.48-8.48l2.83-2.83"
        ></path>
      </svg>
    </div>
  );
}

export default Loading;
