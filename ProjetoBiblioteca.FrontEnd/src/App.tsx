import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from "./components/Books/BookList";

import LayoutWrapper from "./components/layout/LayoutWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route path="/livros" element={<BookList />}></Route>
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
