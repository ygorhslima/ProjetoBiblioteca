
import { useState } from "react";
import BookList from "../../components/Books/BookList";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import './style.css'

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="banner-home">
        <div>
          <h3>Área de livros</h3>
          <p>Aqui você encontra o todos os livros disponíveis da biblioteca</p>
          <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
        </div>
      </div>
      <BookList searchTerm={searchTerm} />
    </>
  );
}
