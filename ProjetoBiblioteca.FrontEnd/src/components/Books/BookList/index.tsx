import "../style.css";
import { useEffect, useState } from "react";
import BookCard from "../BookCard";
import { useSearch } from "../../context/SearchContext";
import type Livro from "../../../interfaces/Livro";

export default function BookList() {
  // 1. Estado para armazenar os livros que vêm da API
  const [livros, setLivros] = useState<Livro[]>([]);
  const { searchTerm } = useSearch(); // pega o termo globalmente
  const [loading, setLoading] = useState(true);

  // 2. Função para buscar os dados
  const fetchLivros = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/livros");
      const data: Livro[] = await response.json();
      setLivros(data);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    } finally {
      setLoading(false);
    }
  };

  const livrosFiltrados = livros.filter((l) =>
    l.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Executa a busca assim que o componente é montado
  useEffect(() => {
    fetchLivros();
  }, []);

  if (loading) return <p>Carregando livros...</p>;

  return (
    <div className="book-list">
      {livrosFiltrados.length > 0 ? (
        livrosFiltrados.map((el) => (
          <BookCard
            key={el.codigo}
            codigo={el.codigo}
            titulo={el.titulo}
            autor={el.autor}
            area={el.area}
            ano={el.ano}
            editora={el.editora}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Nenhum livro encontrado.</p>
      )}
    </div>
  );
}
