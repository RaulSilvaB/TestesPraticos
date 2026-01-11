import "./App.css";
import Composicao from "./components/Composicao";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import ProfileClass from "./components/ProfileClass";
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

      <h2>5 - Componente de classe</h2>
      <ProfileClass name="Goku" job="Sayajin" age={889} />

      <h2>6 - Contador de clicks</h2>
      <Counter />
    </>
  );
}

export default App;
