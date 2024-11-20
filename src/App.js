import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {
  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState();

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Retorno
  return (
    <div>
      <p>{JSON.stringify(produtos)}</p>
      <h1>Formulário de Cadastro</h1>
      <Formulario botao={btnCadastrar} />

      <h1>Tabela de Produtos</h1>
      <Tabela />
    </div>
  );
}

export default App;
