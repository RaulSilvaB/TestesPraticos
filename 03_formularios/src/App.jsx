import "./App.css";
import Dynamic from "./components/Dynamic";
import FileUploader from "./components/FileUploader";
import MultiPartForm from "./components/MultiPartForm";
import RefistrationForm from "./components/RefistrationForm";
import ValidationForm from "./components/ValidationForm";

function App() {
  return (
    <>
      <h2>1 - Formulário de Registro </h2>
      <RefistrationForm />

      <h2>2 - Formulário Dinâmico </h2>
      <Dynamic />

      <h2>3 - Validação de Formulário </h2>
      <ValidationForm />

      <h2>4 - Upload de Arquivos </h2>
      <FileUploader />

      <h2>4 - Formulário de Múltiplas etapas </h2>
      <MultiPartForm />
    </>
  );
}

export default App;
