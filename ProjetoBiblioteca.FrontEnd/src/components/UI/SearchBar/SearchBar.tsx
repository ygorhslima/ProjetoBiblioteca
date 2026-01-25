import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-book"
        placeholder="Pesquise um livro..."
      />
      <button>
        <Search size={18}/>
      </button>
    </div>
  );
};

export default SearchBar;
