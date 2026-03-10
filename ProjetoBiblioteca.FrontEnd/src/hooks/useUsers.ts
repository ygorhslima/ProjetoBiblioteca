/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { userService } from "../services/UserService";
import type Usuario from "../interfaces/Usuario";

const useUsers = (searchUser: string, id?: number) => {
  const [usuario, setUsuario] = useState<Usuario[]>();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [usersData] = await Promise.all([userService.getAllUsers()]);
      setUsuario(usersData);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const usersFiltrados = usuario?.filter((u) => {
    const matchesSearch =
      u.nome?.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchUser.toLowerCase());
    if (id) {
      return matchesSearch && u.id === id;
    }
    return matchesSearch;
  });

  const excluirUsuario = async (id: number): Promise<void> => {
    const confirmacao = window.confirm(
      "tem certeza que deseja excluir esse usuário?",
    );

    if (!confirmacao) {
      return;
    }
    try {
      await userService.delete(id);
      setUsuario((prev) => prev?.filter((u) => u.id !== id));
    } catch (error) {
      console.error("erro ao deletar um usuário: ", error);
      alert("Não foi possível excluir o livro.");
    }
  };

  const editarUsuario = async (
    id: number,
    dadosAtualizados: Partial<Usuario>,
  ) => {
    try {
      const response: Response = await userService.update(id, dadosAtualizados);

      if (response.ok) {
        await loadData();
        return true;
      }

      return true;
    } catch (error) {
      console.error("erro ao editar livro: ", error);
      return false;
    }
  };

  const criarUsuario = async (
    novoUsuario: Omit<Usuario, "id">,
  ): Promise<boolean> => {
    try {
      setLoading(true);
      await userService.create(novoUsuario);
      await loadData();
      return true;
    } catch (error) {
      console.error("erro ao criar o usuario", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    usersFiltrados,
    loading,
    excluirUsuario,
    editarUsuario,
    criarUsuario,
    reload: loadData,
    setUsuario,
  };
};

export default useUsers;
