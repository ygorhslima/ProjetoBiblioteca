import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import LibraryProvider from "./context/LibraryContext";

// Layouts
import AdminLayout from "./page/admin/layout/AdminLayout";
import ClientLayout from "./page/client/layout/ClientLayout";

// Páginas
import Home from "./page/client/Home";
import Dashboard from "./page/admin/Dashboard";

// Constantes (usando a sugestão anterior de ROUTES)
import { ROUTES } from "./constants";
import Login from "./page/auth/Login";
import Cadastro from "./page/auth/Cadastro";
import Gestao from "./page/admin/Gestao";

function App() {
  return (
    <LibraryProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            {/* ROTA DE REDIRECIONAMENTO INICIAL */}
            <Route path="/" element={<Navigate to={ROUTES.PUBLIC.HOME} />} />

            {/* Tudo aqui dentro usará o ClientLayout */}
            <Route element={<ClientLayout />}>
              <Route path={ROUTES.PUBLIC.HOME} element={<Home />} />
              <Route path={`${ROUTES.PUBLIC.HOME}/:id`} element={<Home />} />
              <Route path={ROUTES.PUBLIC.LOGIN} element={<Login />} />
              <Route path={ROUTES.PUBLIC.REGISTER} element={<Cadastro />} />
            </Route>

            {/* Tudo aqui dentro usará o AdminLayout */}
            <Route element={<AdminLayout />}>
              <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.ADMIN.GESTAO} element={<Gestao />} />
            </Route>

            {/* ROTA 404 - OPCIONAL */}
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </LibraryProvider>
  );
}

export default App;
