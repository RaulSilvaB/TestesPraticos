import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Props from "./components/Props";

function App() {
  return (
    <>
      <h2>1 - Criando um conteúdo simples</h2>
      <HelloWorld />

      <h2>2 - Usando Props</h2>
      <Props name={"Raul"} />
    </>
  );
}

export default App;
