import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants";

export default function AdminActions() {
  return (
    <div className="content-card">
      <h3>Ações Rápidas</h3>
      <div className="quick-actions">
        <Link to={ROUTES.ADMIN.EMPRESTIMOS} className="btn-action">
          Registrar Empréstimo
        </Link>
        <Link to={ROUTES.ADMIN.USERS} className="btn-action">
          Gerenciar Usuários
        </Link>
        <button className="btn-action">Relatórios PDF</button>
      </div>
    </div>
  );
}
