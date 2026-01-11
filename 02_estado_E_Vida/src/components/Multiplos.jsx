import { useState } from "react";

const Multiplos = () => {
  const [isOn, setIsOn] = useState(false);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setIsOn(!isOn);
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={handleClick} style={{ width: "100px", height: "50px" }}>
        {isOn ? "ON" : "OFF"} {counter}
      </button>
    </div>
  );
};

export default Multiplos;
