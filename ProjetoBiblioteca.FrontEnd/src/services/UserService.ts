/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINTS } from "../constants";

export const userService = {
  getAllUsers: () =>
    fetch(`${API_ENDPOINTS.USUARIOS}`).then((res) => res.json()),

  create: (novoUsuario: any) => {
    fetch(`${API_ENDPOINTS.USUARIOS}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
    }).then((res) => res.ok);
  },

  delete: (id: number) =>
    fetch(`${API_ENDPOINTS.USUARIOS}/${id}`, { method: "DELETE" }),

  update: (id: number, usuarioAtualizado: any) => {
    fetch(`${API_ENDPOINTS.USUARIOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioAtualizado),
    });
  },
};
