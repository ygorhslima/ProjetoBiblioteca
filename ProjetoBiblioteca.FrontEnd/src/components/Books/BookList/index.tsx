import { useEffect, useState } from "react";
import BookCard from "../BookCard";
import '../style.css';

interface Livro {
  codigo: number;
  titulo: string;
  autor: string;
  area: string;
  ano: number;
  editora: string;
}

export default function BookList() {
  // 1. Estado para armazenar os livros que vêm da API
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Função para buscar os dados
  const fetchLivros = async () => {
    try {
      const response = await fetch("http://localhost:5002/livros"); // Verifique a porta do seu backend
      if (!response.ok) throw new Error("Erro ao buscar livros");
      
      const data = await response.json();
      setLivros(data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Executa a busca assim que o componente é montado
  useEffect(() => {
    fetchLivros();
  }, []);

  if (loading) return <p>Carregando livros...</p>;

  return (
    <div className="book-list">
      {livros.length > 0 ? (
        livros.map((el) => (
          <BookCard
            key={el.codigo} // Use o código único do banco como key
            codigo={el.codigo}
            titulo={el.titulo}
            autor={el.autor}
            area={el.area}
            ano={el.ano}
            editora={el.editora}
          />
        ))
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </div>
  );
}