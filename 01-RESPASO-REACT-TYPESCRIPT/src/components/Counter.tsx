import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, rest1, sum1 } = useCounter();

  return (
    <div>
      <h1>Counter</h1>
      <h3>
        contador: <small>{count}</small>
      </h3>
      <div>
        <button
          onClick={() => sum1()}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white"
        >
          +1
        </button>
        <button
          onClick={() => rest1()}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white"
        >
          -1
        </button>
      </div>
    </div>
  );
};
