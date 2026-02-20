// src/components/layout/SideBar/AdminSideBar.tsx
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants";
import './style.css'
interface SideBarProps {
  isOpen: boolean;
}

export default function AdminSideBar({ isOpen }: SideBarProps) {
  return (
    <div className={`sidebar admin ${isOpen ? "open" : "closed"}`}>
      <h3 style={{ color: "white", padding: "10px" }}>Painel Admin</h3>
      
      <div className="view-books">
        <Link to={ROUTES.ADMIN.DASHBOARD} className="link">Dashboard</Link>
      </div>
      
      <div className="view-books">
        <Link to={ROUTES.ADMIN.GESTAO} className="link">Gestão de livros</Link>
      </div>

      <div className="view-books">
        <Link to={ROUTES.ADMIN.EMPRESTIMOS} className="link">Registrar Empréstimos</Link>
      </div>

      <div className="view-books">
        <Link to={ROUTES.ADMIN.USERS} className="link">Gerenciar Usuários</Link>
      </div>

      <div className="view-books" style={{ marginTop: 'auto' }}>
        <Link to={ROUTES.PUBLIC.HOME} className="link">Sair para o Site</Link>
      </div>
    </div>
  );
}