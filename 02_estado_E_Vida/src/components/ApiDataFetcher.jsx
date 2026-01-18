import React, { useEffect, useState } from "react";

const ApiDataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Ola, os dados chegaram!" });
    }, 2000);
  }, []);

  if (!data) {
    return <p>Carrgando....</p>;
  }
  return <div>{data.message}</div>;
};

export default ApiDataFetcher;
