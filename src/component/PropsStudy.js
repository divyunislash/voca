import { useState } from "react";
import UserName from "./UserName";

const PropsStudy = function (props) {
  const name = props.name;
  const age = props.age;
  const [weight, setWeight] = useState(props.weight);

  const msg = weight > 100 ? "뚠빵합니다." : "날씬합니다.";

  return (
    <div>
      <h1>Bao</h1>
      <UserName name={name} />
      <h2 id="name">
        {name}({age})(몸무게:{weight}kg)
      </h2>
      <button
        onClick={() => {
          setWeight(weight - 1);
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          setWeight(weight + 1);
        }}
      >
        Plus
      </button>
      <p>{msg}</p>
    </div>
  );
};

export default PropsStudy;
