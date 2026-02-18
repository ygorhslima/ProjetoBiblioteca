/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import type Livro from "../interfaces/Livro";
import type Area from "../interfaces/Area";
import { bookService } from "../services/BookService";

const useBooks = (searchTerm: string, idCategoria?: string) => {
  const [livroSelecionado, setlivroSelecionado] = useState<Livro | null>(null);
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState<Area[]>([]);

  const loadData = async () => {
    try {
      setLoading(true); // Garante que volta a carregar se houver reload
      const [livrosData, areasData] = await Promise.all([
        bookService.getAll(),
        bookService.getAreas(),
      ]);

      setLivros(livrosData || []);
      setAreas(areasData || []);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      // Aqui você poderia definir um estado de erro para mostrar ao usuário
    } finally {
      setLoading(false); // ISSO AQUI é o que tira o "Carregando..." da tela
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const livrosFiltrados = livros.filter((l) => {
    const matchesSearch =
      l.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.autor.toLowerCase().includes(searchTerm.toLowerCase());
    if (idCategoria) {
      const area = areas.find((a) => a.id === Number(idCategoria));
      return matchesSearch && (area ? l.area === area.nome : false);
    }
    return matchesSearch;
  });
  
  return { livrosFiltrados, loading, reload: loadData, setLivros };
};

export default useBooks;
