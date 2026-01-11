import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button
        onClick={() => setNumber(number + 1)}
        style={{
          color: "green",
          borderRadius: "20px",
          padding: "15px",
          border: "none",
          background: "black",
          fontSize: "15px",
        }}
      >
        Clquie aqui
      </button>{" "}
      <span
        style={{
          background: "yellow",
          padding: "10px",
          borderRadius: "20px",
          border: "solid 5px black",
          fontFamily: "arial",
          fontSize: "15px",
        }}
      >
        Contador: {number}
      </span>
    </div>
  );
};

export default Counter;
