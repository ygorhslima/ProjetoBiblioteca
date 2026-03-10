import useBooks from "../../../../../hooks/useBooks";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../../../context/SearchContext";
// Importamos agora o formulário único (ajuste o nome do arquivo conforme salvou)
import "./style.css";
import type Livro from "../../../../../interfaces/Livro";

interface TabelaProps {
  onEditar: (livro: Livro) => void;
}

export default function Tabela({ onEditar }: TabelaProps) {
  const { searchTerm } = useSearch();
  const { id } = useParams();
  const { livrosFiltrados, loading, excluirLivro } = useBooks(searchTerm, id);

  if (loading) {
    return <p>Carregando a biblioteca de livros...</p>;
  }

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Área</th>
            <th>Ano</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livrosFiltrados.length > 0 &&
            livrosFiltrados.map((el) => (
              <tr key={el.codigo}>
                <td>{el.codigo}</td>
                <td>{el.titulo}</td>
                <td>{el.autor}</td>
                <td>{el.area}</td>
                <td>{el.ano}</td>
                <td>{el.editora}</td>
                <td>
                  <button className="btn-edit" onClick={() => onEditar(el)}>
                    Editar
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      if (window.confirm("Tem certeza que deseja excluir?")) {
                        excluirLivro(el.codigo);
                      }
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
