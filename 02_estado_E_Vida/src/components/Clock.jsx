import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock;
