import CountHook from "../hooks/countHook";

const Counter = () => {
  const [count, handleAdd, handleSub, handleClear] = CountHook({});

  return (
    <>
      <div className="counterFn__container">
        <h1>Counter: {count}</h1>
        <button onClick={() => handleAdd(1)}>+</button>
        <button onClick={() => handleSub(1)}>-</button>
        <button onClick={() => handleClear(0)}>Clear/Wait(5s)</button>
      </div>
    </>
  );
};

export default Counter;
