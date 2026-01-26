import { Link } from "react-router-dom";
import "./style.css";

interface SideBarProps {
  isOpen: boolean;
}
export default function SideBar({ isOpen }: SideBarProps) {
  return (
    <>
        <div className={`sidebar ${isOpen ? "open":"closed"}`}>
          <h1>Biblioteca</h1>
          <div className="view-books">
            <Link to={`/livros`} className="link">
              Todos os livros
            </Link>
            <Link to={`/livros/1`} className="link">
              Ficção Científica
            </Link>
            <Link to={`/livros/2`} className="link">
              Fantasia
            </Link>
            <Link to={`/livros/3`} className="link">
              Biografia
            </Link>
            <Link to={"/livros/4"} className="link">
              História
            </Link>
            <Link to={"/livros/5"} className="link">
              Tecnologia
            </Link>
            <Link to={"/livros/6"} className="link">
              Suspense
            </Link>
          </div>
          <div className="add-books">
            <Link to={"/livros/"} className="link">Adicionar livros</Link>
          </div>
        </div>
    </>
  );
}
