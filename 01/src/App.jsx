import "./App.css";
import Composicao from "./components/Composicao";
import HelloWorld from "./components/HelloWorld";
import Props from "./components/Props";
import TresProps from "./components/TresProps";

function App() {
  const membrers = [
    { name: "raul", age: 23, job: true },
    { name: "zamasu", age: 30, job: false },
    { name: "bily", age: 13, job: false },
  ];
  return (
    <>
      <h2>1 - Criando um conteúdo simples</h2>
      <HelloWorld />

      <h2>2 - Usando Props</h2>
      <Props name={"Raul"} />

      <h2>3 - Usando três Props</h2>
      <TresProps name={"Raul"} age={24} job={true} />
      <TresProps name={"jubileu"} age={18} job={false} />

      <h2>4 - Composição de componentes</h2>
      <Composicao membrers={membrers} />
    </>
  );
}

export default App;
