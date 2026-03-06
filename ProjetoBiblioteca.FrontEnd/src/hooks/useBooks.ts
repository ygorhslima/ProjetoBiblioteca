/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import type Livro from "../interfaces/Livro";
import type Area from "../interfaces/Area";
import { bookService } from "../services/BookService";

const useBooks = (searchTerm: string, idCategoria?: string) => {
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

  const excluirLivro = async (codigo: number): Promise<void> => {
    // 1. Armazena o resultado da escolha do usuário
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir esse livro?",
    );

    // 2. Se o usuário clicar em "Cancelar", interrompe a função imediatamente
    if (!confirmacao) {
      return;
    }

    try {
      await bookService.delete(codigo);
      // Remove o livro da lista local instantaneamente
      setLivros((prev) => prev.filter((l) => l.codigo !== codigo));
    } catch (error) {
      console.error("Erro ao deletar um livro: ", error);
      alert("Não foi possível excluir o livro.");
    }
  };

  // No seu hook useBooks...
  const editarLivro = async (
    codigo: number,
    dadosAtualizados: Partial<Livro>,
  ) => {
    try {
      const response: Response = await bookService.update(
        codigo,
        dadosAtualizados,
      );

      if (response.ok) {
        await loadData();
        return true;
      }

      return true;
    } catch (error) {
      console.error("Erro ao editar livro:", error);
      return false;
    }
  };

  // Dentro do seu arquivo useBooks.ts
  const criarLivro = async (novoLivro: Omit<Livro, "codigo">) => {
    try {
      setLoading(true);
      const response = await bookService.create(novoLivro); // Certifique-se que o service tem o .create
      if (response) {
        await loadData(); // Recarrega a lista para mostrar o novo livro
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    livrosFiltrados,
    editarLivro,
    excluirLivro,
    criarLivro,
    loading,
    reload: loadData,
    setLivros,
    areas,
  };
};

export default useBooks;
