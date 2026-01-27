import MultiSelectList from "../components/MultiSelectList";
import NestedListComponent from "../components/NestedListComponent";
import SwitchCaseComponent from "../components/SwitchCaseComponent";
import TernaryComponent from "../components/TernaryComponent";
import TimeBasedComponent from "../components/TimeBasedComponent";
import "./App.css";

function App() {
  return (
    <>
      <h2>Renderização em ternário</h2>
      <TernaryComponent condition={false} />
      <TernaryComponent condition={true} />

      <h2>Switch</h2>
      <SwitchCaseComponent value={"1"} />
      <SwitchCaseComponent value="2" />
      <SwitchCaseComponent value="3" />
      <SwitchCaseComponent value="4" />

      <h2>Listas alinhas</h2>
      <NestedListComponent />

      <h2>Renderização baseada no tempo</h2>
      <TimeBasedComponent />

      <h2>Multi seleção</h2>
      <MultiSelectList />
    </>
  );
}

export default App;
