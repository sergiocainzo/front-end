import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {
  //Objeto Produto
  const produto = {
    codigo: 0,
    nome: "",
    marca: "",
  };

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  // Cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert("Produto cadastrado com sucesso!");
          limparFormulario();
        }
      });
  };

  // Limpar Formulário
  const limparFormulario = () => {
    setObjProduto(produto);
  };

  // Selecionar Produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  };

  //Retorno
  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
      />

      <h1>Tabela de Produtos</h1>
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
