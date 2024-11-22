function Formulario({
  botao,
  eventoTeclado,
  cadastrar,
  obj,
  cancelar,
  remover,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        className="form-control"
        onChange={eventoTeclado}
        name="nome"
        value={obj.nome}
      />
      <input
        type="text"
        placeholder="Marca"
        className="form-control"
        onChange={eventoTeclado}
        name="marca"
        value={obj.marca}
      />

      {botao ? (
        <input
          type="button"
          value="Cadastro"
          className="btn btn-success"
          onClick={cadastrar}
        />
      ) : (
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input
            type="button"
            value="Remover"
            className="btn btn-danger"
            onClick={remover}
          />
          <input
            type="button"
            value="Cancelar"
            className="btn btn-secondary"
            onClick={cancelar}
          />
        </div>
      )}
    </form>
  );
}

export default Formulario;
