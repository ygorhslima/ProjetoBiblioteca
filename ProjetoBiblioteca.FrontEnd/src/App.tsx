import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/layout/LayoutWrapper";
import AddBooks from "./page/AddBooks";
import Home from "./page/Home";
import { SearchProvider } from "./context/SearchContext";
import LoginUsuario from "./page/LoginUsuario";
import CadastroUsuario from "./page/CadastroUsuario";
import LibraryProvider from "./context/LibraryContext";

function App() {
  return (
    <>
      <LibraryProvider>
        <SearchProvider>
          <BrowserRouter>
            <LayoutWrapper>
              <Routes>
                <Route
                  path="/ProjetoBiblioteca/livros"
                  element={<Home />}
                ></Route>
                <Route
                  path="/ProjetoBiblioteca/livros/:id"
                  element={<Home />}
                ></Route>
                <Route
                  path="/ProjetoBiblioteca/addlivros"
                  element={<AddBooks />}
                ></Route>
                <Route
                  path="/ProjetoBiblioteca/login/"
                  element={<LoginUsuario />}
                ></Route>
                <Route
                  path="/ProjetoBiblioteca/cadastro/"
                  element={<CadastroUsuario />}
                ></Route>
              </Routes>
            </LayoutWrapper>
          </BrowserRouter>
        </SearchProvider>
      </LibraryProvider>
    </>
  );
}

export default App;
