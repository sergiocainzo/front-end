function Formulario({ botao, eventoTeclado, cadastrar, obj }) {
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
          <input type="button" value="Remover" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Formulario;
