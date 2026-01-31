import { Link } from "react-router-dom";
import "./style.css";
import type SideBarProps from "../../../interfaces/SideBarProps";
import { useEffect, useState } from "react";
import type Area from "../../../interfaces/Area";

export default function SideBar({ isOpen }: SideBarProps) {
  const [areas, setAreas] = useState<Area[]>([]);
  const buscarAreasLivros = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/area");
      if (!response.ok) throw new Error("Erro ao buscar dados");
      const data = await response.json();
      setAreas(data);
    } catch (error) {
      console.error("Erro ao buscar áreas:", error);
    }
  };

  useEffect(() => {
    buscarAreasLivros();
  }, []);

  return (
    <>
        <div className={`sidebar ${isOpen ? "open":"closed"}`}>
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
          
          <div className="view-books">
            <Link to={"/ProjetoBiblioteca/addlivros"} className="link">Adicionar livros</Link>
          </div>
        </div>
    </>
  );
}
