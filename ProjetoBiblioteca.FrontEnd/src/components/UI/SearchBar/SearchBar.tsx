import { Search } from "lucide-react";
import "./style.css";
import { useSearch } from "../../../context/SearchContext";

const SearchBar = () => {
  const { setSearchTerm } = useSearch();

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-book"
        placeholder="Pesquise um livro..."
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className="button-search">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
