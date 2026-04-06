import type Emprestimo from "../../../../../interfaces/Emprestimo";
import "../../style.css";

interface TabelaEmprestimo {
  emprestimos: Emprestimo[];
  realizarDevolucao: (id: number) => void;
}

const TabelaEmprestimo = ({ emprestimos, realizarDevolucao }: TabelaEmprestimo) => {
  return (
    <>
      <section className="list-section-table">
        <h2>Empréstimos Ativos</h2>
        <table className="emprestimos-table">
          <thead>
            <tr>
              <th>Leitor</th>
              <th>Livro</th>
              <th>Data do Empréstimo</th>
              <th>Previsão de Devolução</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {emprestimos.length > 0 ? (
              emprestimos.map((emprestimo) => (
                <tr key={emprestimo.id}>
                  <td>{emprestimo.usuario?.nome || "Usuário não encontrado"}</td>
                  <td>{emprestimo.livro?.titulo || "Livro não encontrado"}</td>
                  <td>{new Date(emprestimo.dataEmprestimo).toLocaleDateString()}</td>
                  <td>{new Date(emprestimo.dataDevolucaoPrevista).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => realizarDevolucao(emprestimo.id)}>
                      Devolver
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Nenhum empréstimo ativo no momento.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TabelaEmprestimo;
