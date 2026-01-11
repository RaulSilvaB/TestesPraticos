import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);

  function handleToggle() {
    setOn(!on);
  }
  return (
    <div>
      <button onClick={handleToggle} style={{ width: "50px" }}>
        {on ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Toggle;
