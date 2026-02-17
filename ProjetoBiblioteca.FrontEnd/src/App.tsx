import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/layout/LayoutWrapper";
import AddBooks from "./page/AddBooks";
import Home from "./page/Home";
import { SearchProvider } from "./context/SearchContext";
import LoginUsuario from "./page/LoginUsuario";
import CadastroUsuario from "./page/CadastroUsuario";
import LibraryProvider from "./context/LibraryContext";
import { PATHS } from "./constants";

function App() {
  return (
    <>
      <LibraryProvider>
        <SearchProvider>
          <BrowserRouter>
            <LayoutWrapper>
              <Routes>
                <Route path={`${PATHS.HOME}`} element={<Home />}></Route>
                <Route path={`${PATHS.HOME}/:id`} element={<Home />}></Route>
                <Route
                  path={`${PATHS.ADD_BOOKS}`}
                  element={<AddBooks />}
                ></Route>
                <Route
                  path={`${PATHS.LOGIN}`}
                  element={<LoginUsuario />}
                ></Route>
                <Route
                  path={`${PATHS.REGISTER}`}
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
