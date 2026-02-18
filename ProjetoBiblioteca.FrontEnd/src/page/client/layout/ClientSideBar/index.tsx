// src/components/layout/SideBar/ClientSideBar.tsx
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLibrary } from "../../../../context/LibraryContext";
import { ROUTES } from "../../../../constants"; 
import './style.css'
// Note que movi a interface para cá para eliminar o arquivo extra em /interfaces
interface SideBarProps {
  isOpen: boolean;
}

export default function ClientSideBar({ isOpen }: SideBarProps) {
  const { areas } = useLibrary();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="div_dropdown">
        <button onClick={() => setDropdown(!dropdown)}>
          <ChevronDown color="white" />
        </button>
        <p style={{ color: "white" }}>Catálogo</p>
      </div>

      {dropdown && (
        <div className="dropdown-content">
          <div className="view-books">
            <Link to={ROUTES.PUBLIC.HOME} className="link">Todos os livros</Link>
          </div>
          {areas.map((el) => (
            <div className="view-books" key={el.id}>
              <Link to={`${ROUTES.PUBLIC.HOME}/${el.id}`} className="link">
                {el.nome}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="view-books">
        <Link to={ROUTES.PUBLIC.LOGIN} className="link">Login</Link>
      </div>
      <div className="view-books">
        <Link to={ROUTES.PUBLIC.REGISTER} className="link">Cadastro</Link>
      </div>
    </div>
  );
}