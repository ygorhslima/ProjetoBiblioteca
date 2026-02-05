/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = "http://localhost:5002/api";

export const bookService = {
  getAll: () => fetch(`${BASE_URL}/livros`).then((res) => res.json()),

  getAreas: () => fetch(`${BASE_URL}/area`).then((res) => res.json()),

  delete: (codigo: number) =>
    fetch(`${BASE_URL}/livros/${codigo}`, { method: "DELETE" }),

  create: (novoLivro: any) =>
    fetch(`${BASE_URL}/livros`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    }).then((res) => res.ok),

  update: (codigo: number, livroAtualizado: any) =>
    fetch(`${BASE_URL}/livros/${codigo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroAtualizado),
    }),
};
