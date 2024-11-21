function Formulario({ botao, eventoTeclado }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        className="form-control"
        onChange={eventoTeclado}
        name="nome"
      />
      <input
        type="text"
        placeholder="Marca"
        className="form-control"
        onChange={eventoTeclado}
        name="marca"
      />

      {botao ? (
        <input type="button" value="Cadastro" className="btn btn-success" />
      ) : (
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input type="button" value="Remover" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Formulario;
