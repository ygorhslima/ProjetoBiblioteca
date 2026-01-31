import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/layout/LayoutWrapper";
import AddBooks from "./page/AddBooks";
import Home from "./page/Home";
import { SearchProvider } from "./components/context/SearchContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
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
            </Routes>
          </LayoutWrapper>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
