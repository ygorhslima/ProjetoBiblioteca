import { Link } from "react-router-dom";
import "./style.css";
import type SideBarProps from "../../../interfaces/SideBarProps";
import { useLibrary } from "../../../context/LibraryContext";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SideBar({ isOpen }: SideBarProps) {
  const {areas} = useLibrary();
  const [dropdown, setDropdown] = useState(false);
  return (
    <>

        <div className={`sidebar ${isOpen ? "open":"closed"}`}>
          
          <div className="div_dropdown ">
            <button onClick={()=>{setDropdown(!dropdown)}}><ChevronDown color="white"/></button>
            <p style={{color:"white"}}>Catálogo</p>
          </div>

         {dropdown ? <div>
            <div className="view-books">
              <Link to={`/ProjetoBiblioteca/livros`} className="link">
                Todos os livros
              </Link>
            </div>
            <div className="view-books">
              {areas.map((el)=>(
                <Link key={el.id} to={`/ProjetoBiblioteca/livros/${el.id}`} className="link">
                  {el.nome}
                </Link>
              ))}
            </div>
          </div>:<></>}
          
          <div className="view-books">
            <Link to={"/ProjetoBiblioteca/addlivros"} className="link">Adicionar livros</Link>
          </div>

          <div className="view-books">
            <Link to={"/ProjetoBiblioteca/login"} className="link">Login</Link>
          </div>

          <div className="view-books">
            <Link to={"/ProjetoBiblioteca/cadastro"} className="link">Cadastro</Link>
          </div>
        </div>
    </>
  );
}
