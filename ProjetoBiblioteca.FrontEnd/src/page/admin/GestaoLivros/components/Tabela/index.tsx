import useBooks from "../../../../../hooks/useBooks";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../../../context/SearchContext";
import FormInputEditLivro from "../FormInputEditLivro";
import "./style.css";
import type Livro from "../../../../../interfaces/Livro";
import { useState } from "react";

export default function Tabela() {
  const { searchTerm } = useSearch();
  const { id } = useParams();
  const { livrosFiltrados, loading, excluirLivro } = useBooks(searchTerm, id);

  const [livroParaEditar, setLivroParaEditar] = useState<Livro | null>(null);

  if (loading) {
    return <p>Carregando a biblioteca de livros...</p>;
  }

  return (
    <div className="table-container">
      {/* SE existir um livro selecionado, renderiza o formulário por cima */}
      {livroParaEditar && (
        <div className="modal-overlay">
          <FormInputEditLivro
            livro={livroParaEditar}
            onClose={() => setLivroParaEditar(null)}
          />
        </div>
      )}
      <table className="custom-table">
        <thead>
          <tr>
            <th>codigo</th>
            <th>titulo</th>
            <th>autor</th>
            <th>area</th>
            <th>ano</th>
            <th>editora</th>
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
                  <button
                    className="btn-edit"
                    onClick={() => setLivroParaEditar(el)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => excluirLivro(el.codigo)}
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
