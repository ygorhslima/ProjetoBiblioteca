import { Search } from "lucide-react";
import "./style.css";
import { useSearch } from "../../../../../context/SearchContext";

const SearchBarLivro = () => {
  const { setSearchTerm } = useSearch();

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-book"
        placeholder="Pesquise..."
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className="button-search">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchBarLivro;
