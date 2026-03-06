import './style.css';

import useUsers from '../../../../../hooks/useUsers'
import { useSearch } from '../../../../../context/SearchContext';
import { useParams } from 'react-router-dom';

export default function Tabela()
{
  const {searchTerm} = useSearch();
  const {cpf} = useParams();
  const {usersFiltrados: usuariosFiltrados, loading} = useUsers(searchTerm, cpf);
 
  if(loading){
    return <p>carregando usuarios...</p>
  }
  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Cpf</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados && usuariosFiltrados.length > 0 && (
              usuariosFiltrados.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                  <td>{user.telefone}</td>
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
    </>
  );
}