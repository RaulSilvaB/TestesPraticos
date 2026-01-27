import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  return <div>Valor inicial: {counter}</div>;
};

export default Counter;
