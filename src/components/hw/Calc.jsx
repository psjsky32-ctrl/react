import { useState } from "react";

export const Calc = () => {
  // const [num1, setnum1] = useState();
  // const [num2, setnum2] = useState();
  // const [result, setresult] = useState(0);
  const [{ num1, num2, result }, setNums] = useState({
    num1: 10,
    num2: 20,
    result: 30,
  });

  const onNum1Change = (event) => {
    // setnum1(parseInt(event.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, num1: parseInt(event.target.value) };
      return newNums;
    });
  };

  const onNum2Change = (event) => {
    setNums((prevNums) => {
      const newNums = { ...prevNums, num2: parseInt(event.target.value) };
      return newNums;
    });
  };

  const onCalculate = (operator) => {
    let result = 0;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "x") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }
    setNums((prevNums) => {
      const newResult = { ...prevNums, result };
      return newResult;
    });
  };

  //   const onPlusButtonClickHandler = () => {
  //     setresult(Number(num1) + Number(num2));
  //   };

  //   const onMinusButtonClickHandler = () => {
  //     setresult(Number(num1) - Number(num2));
  //   };

  //   const onmultiplyButtonClickHandler = () => {
  //     setresult(Number(num1) * Number(num2));
  //   };

  //   const ondivideButtonClickHandler = () => {
  //     setresult(Number(num1) / Number(num2));
  //   };

  return (
    <div className="wapper3">
      <input type="number" value={num1} onChange={onNum1Change} />
      <button
        type="button"
        className="plus"
        onClick={onCalculate.bind(this, "+")}
      >
        +
      </button>
      <button
        type="button"
        className="minus"
        onClick={onCalculate.bind(this, "-")}
      >
        -
      </button>
      <button
        type="button"
        className="multiply"
        onClick={onCalculate.bind(this, "x")}
      >
        x
      </button>
      <button
        type="button"
        className="divide"
        onClick={onCalculate.bind(this, "/")}
      >
        /
      </button>
      <input type="number" value={num2} onChange={onNum2Change} />
      <div>= {result}</div>
    </div>
  );
};
