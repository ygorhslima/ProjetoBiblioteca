import { Search } from "lucide-react";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-book"
        placeholder="Pesquise um livro..."
        required
      />
      <button className="button-search">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
