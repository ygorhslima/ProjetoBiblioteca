import useBooks from "../../../../../hooks/useBooks";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../../../context/SearchContext";
import "./style.css";
import { useEffect } from "react";

export default function Tabela() {
  const {searchTerm} = useSearch();
  const {id} = useParams();
  const {livrosFiltrados, loading, reload,setLivros} = useBooks(searchTerm, id);

  if(loading){
    return <p>Carregando a biblioteca de livros...</p>
  }
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>codigo</th>
            <th>titulo</th>
            <th>autor</th>
            <th>area</th>
            <th>ano</th>
            <th>editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livrosFiltrados.length > 0 && (
            livrosFiltrados.map((el)=>(
              <tr key={el.codigo}>
                <td>{el.codigo}</td>
                <td>{el.titulo}</td>
                <td>{el.autor}</td>
                <td>{el.area}</td>
                <td>{el.ano}</td>
                <td>{el.editora}</td>
                <td>
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Excluir</button>
                </td>
              </tr> 
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
