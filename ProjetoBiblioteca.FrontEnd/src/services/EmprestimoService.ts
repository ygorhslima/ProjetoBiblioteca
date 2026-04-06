/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINTS } from "../constants";

export const emprestimoService = {
  getAll: () => fetch(`${API_ENDPOINTS.EMPRESTIMOS}`).then((res) => res.json()),

  create: (novoEmprestimo: any) => {
    return fetch(`${API_ENDPOINTS.EMPRESTIMOS}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoEmprestimo),
    }).then((res) => res.ok);
  },

  delete: (id: number) => {
    return fetch(`${API_ENDPOINTS.EMPRESTIMOS}/${id}`, { method: "DELETE" });
  },

  update: (id: number, emprestimoAtualizado: any) => {
    return fetch(`${API_ENDPOINTS.EMPRESTIMOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emprestimoAtualizado),
    });
  },

  devolver: (id: number) => {
    return fetch(`${API_ENDPOINTS.EMPRESTIMOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataDevolucaoReal: new Date().toISOString(),
      }),
    }).then((res) => res.ok);
  },
};
