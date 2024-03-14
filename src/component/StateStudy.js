import { useState } from "react";

// 7. state,userState
const StateStudy = function () {
  // useState는 배열을 반환함
  // 배열의 첫 번째 값은 state(name-변수명)
  // 두 번째는 state를 변경해주는 함수(setName)
  // 배열구조분해 사용
  // setName 함수를 호출해서 name이 바귀면 리액트는 이 컴포넌트를 다시 렌더링함
  // useState('초기값')
  const [name, setName] = useState("Mike");
  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }

  return (
    <div>
      <h1>State Test</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default StateStudy;
