/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import type Usuario from "../interfaces/Usuario";
import type Livro from "../interfaces/Livro";
import type Emprestimo from "../interfaces/Emprestimo";

import { userService } from "../services/UserService";
import { bookService } from "../services/BookService";
import { emprestimoService } from "../services/EmprestimoService";

const useEmprestimo = () => {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      // Busca Empréstimos, Usuários e Livros simultaneamente
      const [emprestimosData, usuariosData, livrosData] = await Promise.all([
        emprestimoService.getAll(),
        userService.getAll(),
        bookService.getAll(),
      ]);

      // Cruza os dados: usa usuarioId/livroId para encontrar os objetos reais nas outras listas
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emprestimosFormatados = (emprestimosData || []).map((emp: any) => {
        // Garante a leitura do ID independente de vir como 'usuarioId' ou 'UsuarioId'
        const idUsuario = emp.usuarioId || emp.UsuarioId;
        const idLivro = emp.livroId || emp.LivroId;

        return {
          ...emp,
          usuario: usuariosData?.find((u: Usuario) => u.id === idUsuario),
          livro: livrosData?.find((l: Livro) => l.codigo === idLivro),
        };
      });

      console.log(emprestimosFormatados)

      setEmprestimos(emprestimosFormatados);
      setUsuarios(usuariosData || []);
      setLivros(livrosData || []);
    } catch (error) {
      console.error("Erro ao carregar dados de empréstimo:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtra apenas empréstimos válidos (que possuem usuário e livro vinculados)
  const emprestimoFiltrados = emprestimos.filter((e) => e.usuario && e.livro);

  const criarEmprestimo = async (novoEmprestimo: {
    usuarioId: number;
    livroId: number;
  }) => {
    try {
      setLoading(true);
      await emprestimoService.create(novoEmprestimo);
      await loadData();
      return true;
    } catch (error) {
      console.error("Erro ao criar empréstimo:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const realizarDevolucao = async (id: number) => {
    const confirmacao = window.confirm("Confirmar a devolução deste livro?");

    if (!confirmacao) return;

    try {
      setLoading(true);
      await emprestimoService.devolver(id);
      await loadData();
    } catch (error) {
      console.error("Erro ao realizar devolução:", error);
      alert("Não foi possível realizar a devolução.");
    } finally {
      setLoading(false);
    }
  };


  return {
    emprestimos,
    usuarios,
    livros,
    loading,
    emprestimoFiltrados,
    criarEmprestimo,
    realizarDevolucao,
    reload: loadData,
  };
};

export default useEmprestimo;
