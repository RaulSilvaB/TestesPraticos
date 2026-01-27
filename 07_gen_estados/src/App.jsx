import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h2>Contador com REDUX</h2>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
