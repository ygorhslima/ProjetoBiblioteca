import { useEffect, useState } from "react";
import { bookService } from "../../../services/BookService";
import "./style.css";
import { useLibrary } from "../../../context/LibraryContext";

import AreaDistribuition from "./components/AreaDistribuitions";
import AdminActions from "./components/AdminActions";
import StatCard from "./components/StatCard";
import useBooks from "../../../hooks/useBooks";
import { useSearch } from "../../../context/SearchContext";

// 1. Refatore o componente Dashboard
export default function Dashboard() {
  const { areas } = useLibrary();
  const { searchTerm } = useSearch();
  const {livrosFiltrados, loading} = useBooks(searchTerm);
  const totalLivros = livrosFiltrados.length;
  const [loansActive] = useState(12);
  const [overdue] = useState(3);
  
  if (loading) return <p>Carregando estatísticas...</p>;

  return (
    <div className="dashboard-container">
      <StatCard
        totalBooks={totalLivros}
        loansActive={loansActive}
        overdue={overdue}
        areas={areas}
      />
      <div className="dashboard-content">
        <AreaDistribuition areas={areas} />
        <AdminActions />
      </div>
    </div>
  );
}
