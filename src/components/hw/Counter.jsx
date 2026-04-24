import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  // const onMinusButtonClickHandler = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const onPlusButtonClickHandler = () => {
  //   if (count < 100) {
  //     setCount(count + 1);
  //   }
  // };

  const onButtonClickHandler = (event) => {
    const className = event.target.classList.value;

    setCount((prevCount) => {
      if (className.includes("minus")) {
        if (prevCount === 0) {
          return prevCount;
        }
        return prevCount - 1;
      } else if (className.includes("plus")) {
        if (prevCount === 100) {
          return prevCount;
        }
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="wrapper2">
        <button className="minus" onClick={onButtonClickHandler}>
          -
        </button>
        <div>{count}</div>
        <button className="plus" onClick={onButtonClickHandler}>
          +
        </button>
      </div>
    </>
  );
};
