import CountHook from "../hooks/countHook";

const  StockFn = () => {
  const [count, handleAdd, handleSub, handleClear] = CountHook({});

  return (
    <>
      <div className="StockFn__container">
        <h1>Stock Purchase Amount: {count}</h1>
        <button onClick={() => handleAdd(3)}>+</button>
        <button onClick={() => handleSub(3)}>-</button>
        <button onClick={() => handleClear(0)}>Clear/Wait(5s)</button>
      </div>
    </>
  );
};

export default StockFn;
