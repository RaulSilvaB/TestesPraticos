import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import HelloWorld from "./components/HelloWorld";
import StyledComponentExample from "./components/StyledComponentExample";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <h1>1 - Hello World</h1>
      <HelloWorld />

      <h1>2 - Estilos com CSS Externo</h1>
      <Button />

      <h1>3 - Tema light e dark</h1>
      <ThemeToggle />

      <h1>4 - Styled Component</h1>
      <StyledComponentExample />

      <h1>4 - SASS com React</h1>
      <Card />
    </>
  );
}

export default App;
