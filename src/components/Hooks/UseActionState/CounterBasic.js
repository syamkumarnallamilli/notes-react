import React, { useActionState } from "react";

const counterReducer = (prevState, actionType) => {
  if (actionType === "increment") return prevState + 1;
  if (actionType === "decrement") return prevState - 1;
  return prevState;
};

const Counter = () => {
  const [count, updateCount] = useActionState(counterReducer, 0);

  return (
    <div className="p-4 border w-64 mx-auto text-center">
      <h2 className="text-2xl font-bold">{count}</h2>
      <button onClick={() => updateCount("increment")} className="px-3 py-1 bg-blue-500 text-white m-2">+</button>
      <button onClick={() => updateCount("decrement")} className="px-3 py-1 bg-red-500 text-white m-2">-</button>
    </div>
  );
};

export default Counter;