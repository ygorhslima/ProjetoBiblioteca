/* eslint-disable @typescript-eslint/no-explicit-any */

// 1. Configurações Base
const BASE_URL_APP = "/ProjetoBiblioteca";
const API_BASE_URL = "http://localhost:5002/api";

// 2. Rotas de Navegação (Front-end)
export const ROUTES = {
  PUBLIC: {
    HOME: `${BASE_URL_APP}/livros`,
    LOGIN: `${BASE_URL_APP}/login`,
    REGISTER: `${BASE_URL_APP}/cadastro`,
  },
  ADMIN: {
    DASHBOARD: `${BASE_URL_APP}/admin/dashboard`,
    GESTAO: `${BASE_URL_APP}/admin/gestao`,
    BOOKS: `${BASE_URL_APP}/admin/livros`,
    USERS: `${BASE_URL_APP}/admin/usuarios`,
  }
};

// 3. Endpoints da API (Back-end)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
  },
  AREAS: `${API_BASE_URL}/area`,
  LIVROS: {
    BASE: `${API_BASE_URL}/livros`,
    BY_ID: (id: string | number) => `${API_BASE_URL}/livros/${id}`,
    SEARCH: (term: string) => `${API_BASE_URL}/livros/search?q=${term}`,
  },
};