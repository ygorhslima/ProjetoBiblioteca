import "../../style.css"

const TabelaEmprestimo = () => {
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
            {/** 
             *      {emprestimos.length > 0 ? (
                    emprestimos.map(emprestimo => (
                        <tr key={emprestimo.id}>
                        <td>{emprestimo.usuario.nome}</td>
                        <td>{emprestimo.livro.titulo}</td>
                        <td>{emprestimo.dataEmprestimo}</td>
                        <td>{emprestimo.dataDevolucaoPrevista}</td>
                        <td>
                            <button onClick={() => handleDevolverLivro(emprestimo.id)} className="btn-devolver" >
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
             * 
             * 
             * 
            */}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default TabelaEmprestimo;
