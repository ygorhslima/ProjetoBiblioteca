/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE = "/ProjetoBiblioteca";

export const PATHS = {
  HOME: `${BASE}/livros`,
  ADD_BOOKS: `${BASE}/addlivros`,
  LOGIN: `${BASE}/login`,
  REGISTER: `${BASE}/cadastro`,
};


const API_BASE_URL = "http://localhost:5002/api";
export const API_ENDPOINTS = {
  AREAS: `${API_BASE_URL}/area`,
  LIVROS: `${API_BASE_URL}/livros`,
  LIVRO_BY_ID: (id:any) => `${API_BASE_URL}/livros/${id}`,
};