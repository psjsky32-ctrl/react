import { useState } from "react";

export const StateTest = () => {
  console.log("StateTest component(함수) 실행 됨.");

  // 변경 가능한 상수를 생성 (state)
  const [value, setValue] = useState("Initiate Value");
  //useState => 캐시에 Data가 잇는지 보고 넣는다
  //setValue => 캐시 Data변경, 컴포넌트 재실행
  const onTextKeyUpHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return <StateTestItem text={value} onTextKeyUp={onTextKeyUpHandler} />;
};

const StateTestItem = ({ text, onTextKeyUp }) => {
  console.log("StateTest component(함수) 실행 됨.");

  return (
    <div>
      {text}
      <div>
        <input tpye="text" onKeyUp={onTextKeyUp} />
      </div>
    </div>
  );
};
