import { Link } from "react-router-dom";
import "./style.css";

interface SideBarProps {
  isOpen: boolean;
}

/*const categorias = [
  {id: 1, nome: "Ficção Científica"},
  {id: 2, nome: "Fantasia"},
  {id: 3, nome: "Biografia"},
  {id: 4, nome: "História"},
  {id: 5, nome: "Tecnologia"},
  {id: 6, nome: "Suspense"},
]*/

export default function SideBar({ isOpen }: SideBarProps) {
  return (
    <>
        <div className={`sidebar ${isOpen ? "open":"closed"}`}>
          <h1>Biblioteca</h1>
          <div className="view-books">
            <Link to={`/ProjetoBiblioteca/livros`} className="link">
              Todos os livros
            </Link>
          </div>
          <div className="add-books">
            <Link to={"/ProjetoBiblioteca/addlivros"} className="link">Adicionar livros</Link>
          </div>
        </div>
    </>
  );
}
