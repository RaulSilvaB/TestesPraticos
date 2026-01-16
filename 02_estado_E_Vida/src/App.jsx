import "./App.css";
import Clock from "./components/Clock";
import DataFetcher from "./components/DataFetcher";
import Multiplos from "./components/Multiplos";
import TodoList from "./components/TodoList";
import Toggle from "./components/Toggle";
import VerificarTela from "./components/VerificarTela";

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />

      <h2>2 - Múltiplos estados</h2>
      <Multiplos />

      <h2>3 - relógio em tempo real</h2>
      <Clock />

      <h3>4 - Lista de Tarefas</h3>
      <TodoList />

      <h3>5 - Verificar tela</h3>
      <VerificarTela />

      <h3>6 - Simulação de requisição de API</h3>
      <DataFetcher />
    </>
  );
}

export default App;
