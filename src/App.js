import { useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);






  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <Formulario 
      botao={btnCadastrar}/>

      <h1>Tabela de Produtos</h1>
      <Tabela />
    </div>
  );
}

export default App;
