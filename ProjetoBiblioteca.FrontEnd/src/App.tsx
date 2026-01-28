import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/layout/LayoutWrapper";
import AddBooks from "./page/AddBooks";
import Home from "./page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route path="/ProjetoBiblioteca/livros" element={<Home />}></Route>
            <Route path="/ProjetoBiblioteca/addlivros" element={<AddBooks />}></Route>
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
