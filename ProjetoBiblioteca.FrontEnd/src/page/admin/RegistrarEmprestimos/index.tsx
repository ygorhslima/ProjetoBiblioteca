import useBooks from "../../../hooks/useBooks";
import useUsers from "../../../hooks/useUsers";
import TabelaEmprestimo from "./components/TabelaEmprestimo";
import "./style.css";

export default function RegistrarEmprestimos() {
  const { livrosFiltrados } = useBooks("");
  const { usersFiltrados } = useUsers("");
  return (
    <div className="registrar-emprestimos-container">
      <h1>Registrar Empréstimos</h1>

      <section className="form-section">
        <h2>Novo Empréstimo</h2>
        <form className="emprestimo-form">
          <div className="form-group">
            <label htmlFor="usuario">Selecione o Usuário</label>
            <select id="usuario" required>
              <option value="" disabled>
                Selecione um usuario disponível...
              </option>
              {usersFiltrados && usersFiltrados.length > 0 &&
                usersFiltrados.map((el) => {
                  return (
                    <option value={el.nome} key={el.id}>
                      {el.nome}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="livro">Selecione o Livro</label>
            <select id="livro" required>
              <option value={``} disabled>
                Selecione um livro disponível...
              </option>
              {livrosFiltrados.length > 0 &&
                livrosFiltrados.map((el) => {
                  return (
                    <option value={el.titulo} key={el.codigo}>
                      {el.titulo}
                    </option>
                  );
                })}
            </select>
          </div>

          <button type="submit" className="btn-registrar">
            Registrar
          </button>
        </form>
      </section>

      <TabelaEmprestimo />
    </div>
  );
}
