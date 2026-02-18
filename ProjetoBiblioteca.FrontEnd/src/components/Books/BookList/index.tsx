import "../style.css";
import { useSearch } from "../../../context/SearchContext";
import { useParams } from "react-router-dom";
import BookCard from "../BookCard";
import useBooks from "../../../hooks/useBooks";

const BookList = () => {
  const { searchTerm } = useSearch();
  const { id } = useParams();

  const { livrosFiltrados, loading, reload, setLivros } = useBooks(
    searchTerm,
    id,
  );

  if (loading) return <p>Carregando livros...</p>;

  return (
    <>
      <div className="book-list">
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((el) => (
            <BookCard
              key={el.codigo}
              {...el}
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
