import { Link } from "react-router-dom";
import { useLibrary } from "../../../../context/LibraryContext";
import { ROUTES } from "../../../../constants";
import "./style.css";
import type SideBarProps from "../../../../interfaces/SideBarProps";

export default function ClientSideBar({ isOpen }: SideBarProps) {
  const { areas } = useLibrary();

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="dropdown-content">
        <div className="view-books">
          <Link to={ROUTES.PUBLIC.HOME} className="link">
            Todos os livros
          </Link>
        </div>
        {areas.map((el) => (
          <div className="view-books" key={el.id}>
            <Link to={`${ROUTES.PUBLIC.HOME}/${el.id}`} className="link">
              {el.nome}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
