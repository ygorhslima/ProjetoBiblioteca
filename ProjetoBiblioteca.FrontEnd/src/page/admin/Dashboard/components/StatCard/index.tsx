import { Book, Layers, TrendingUp, AlertCircle } from "lucide-react"; // Importe os ícones que faltam
import type Area from "../../../../../interfaces/Area"; 

interface StatCardProps {
  totalBooks: number;
  loansActive: number;
  overdue: number;
  areas: Area[];
}

export default function StatCard(props: StatCardProps) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="icon-wrapper primary">
          <Book size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{props.totalBooks}</span>
          <span className="stat-label">Livros no Acervo</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-wrapper success">
          <Layers size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{props.areas.length}</span>
          <span className="stat-label">Áreas de Conhecimento</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-wrapper warning">
          <TrendingUp size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{props.loansActive}</span>
          <span className="stat-label">Empréstimos Ativos</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-wrapper danger">
          <AlertCircle size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{props.overdue}</span>
          <span className="stat-label">Atrasados</span>
        </div>
      </div>
    </div>
  );
}
