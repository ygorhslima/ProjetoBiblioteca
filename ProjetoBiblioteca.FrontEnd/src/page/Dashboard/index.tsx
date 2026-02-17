import { useEffect, useState } from "react";
import { bookService } from "../../services/BookService";
import "./style.css";
import { useLibrary } from "../../context/LibraryContext";

import AreaDistribuition from "../../components/AdminComponents/AreaDistribuitions";
import AdminActions from "../../components/AdminComponents/AdminActions";
import StatCard from "../../components/AdminComponents/StatCard";


// 1. Refatore o componente Dashboard
export default function Dashboard() {
  const { areas } = useLibrary();
  const [totalBooks, setTotalBooks] = useState(0);
  const [loansActive] = useState(12);
  const [overdue] = useState(3);
  
  useEffect(() => {
    // Carrega a contagem de livros (supondo que o getAll retorne a lista)
    bookService.getAll().then((books) => {
      if (books) setTotalBooks(books.length);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <StatCard totalBooks={totalBooks} loansActive={loansActive} overdue={overdue} areas={areas}/>
      <div className="dashboard-content">
        <AreaDistribuition areas={areas} />
        <AdminActions/>
      </div>
    </div>
  );
}