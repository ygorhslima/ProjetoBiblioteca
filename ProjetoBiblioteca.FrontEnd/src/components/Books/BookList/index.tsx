import "../style.css";
import { useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import { useParams } from "react-router-dom";
import { bookService } from "../../../services/BookService";
import type Livro from "../../../interfaces/Livro";
import BookCard from "../BookCard";
import FormInputEditLivro from "../../UI/FormInputEditLivro";
import useBooks from "../../../hooks/useBooks";

const BookList = () => {
  const [livroSelecionado, setLivroSelecionado] = useState<Livro | null>(null);
  const { searchTerm } = useSearch();
  const { id } = useParams();

  const { livrosFiltrados, loading, reload, setLivros } = useBooks(
    searchTerm,
    id,
  );

  const handleDelete = async (codigo: number) => {
    if (await bookService.delete(codigo)) {
      setLivros((prev) => prev.filter((l) => l.codigo !== codigo));
    }
  };

  if (loading) return <p>Carregando livros...</p>;

  return (
    <>
      {/* Modal de Edição */}
      {livroSelecionado && (
        <div className="modal-overlay">
          <FormInputEditLivro
            livro={livroSelecionado}
            onClose={() => {
              setLivroSelecionado(null);
              reload(); // Agora usamos o reload do nosso hook
            }}
          />
        </div>
      )}

      {/* Listagem */}
      <div className="book-list">
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((el) => (
            <BookCard
              key={el.codigo}
              {...el}
              onDelete={() => handleDelete(el.codigo)}
              onPut={() => setLivroSelecionado(el)}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            Nenhum livro encontrado.
          </p>
        )}
      </div>
    </>
  );
};

export default BookList;
