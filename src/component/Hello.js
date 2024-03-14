// import World from "./World";
// import styles from "./Hello.module.css";
import { useState } from "react";

// const Hello = function () {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <World />
//       <div className={styles.box}>Hello module box</div>
//       <button>show name</button>
//       <button>show age</button>
//     </div>
//   );
// };

// 6. 이벤트 처리
// const Hello = function () {

//   function showName() {
//     document.getElementById("name").innerHTML = "MIKE";
//   }

//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={showName}>show name</button>
//       <p id="name"></p>
//       <button
//         onClick={() => {
//           document.getElementById("age").innerHTML = "30";
//         }}
//       >
//         show age
//       </button>
//       <p id="age"></p>
//       <input
//         type="text"
//         onChange={(e) => {
//           document.getElementById("message").innerHTML = e.target.value;
//         }}
//       ></input>
//       <p id="message"></p>
//     </div>
//   );
// };

// 7. state,userState
// const Hello = function () {
//   const [name, setName] = useState("Mike");

//   function changeName() {
//     const newName = name === "Mike" ? "Jane" : "Mike";
//     setName(newName);
//   }

//   return (
//     <div>
//       <h1>state</h1>
//       <h2 id="name">{name}</h2>
//       <button onClick={changeName}>Change</button>
//     </div>
//   );
// };

// 8. props
const Hello = function (props) {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name}({age})
      </h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          setAge(age + 1);
        }}
      >
        Change
      </button>
      <p>{msg}</p>
    </div>
  );
};

export default Hello;
