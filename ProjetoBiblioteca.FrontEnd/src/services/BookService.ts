/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINTS } from "../constants";

export const bookService = {
  getAll: () => fetch(`${API_ENDPOINTS.LIVROS.BASE}`).then((res) => res.json()),

  getAreas: () => fetch(`${API_ENDPOINTS.AREAS}`).then((res) => res.json()),

  delete: (codigo: number) =>
    fetch(`${API_ENDPOINTS.LIVROS}/${codigo}`, { method: "DELETE" }),

  create: (novoLivro: any) =>
    fetch(`${API_ENDPOINTS.LIVROS}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    }).then((res) => res.ok),

  update: (codigo: number, livroAtualizado: any) =>
    fetch(`${API_ENDPOINTS.LIVROS}/${codigo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroAtualizado),
    }),
};
