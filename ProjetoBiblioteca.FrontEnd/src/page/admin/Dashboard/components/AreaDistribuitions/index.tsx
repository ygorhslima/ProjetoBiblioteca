import type Area from "../../../../../interfaces/Area";

interface AreaDistribuitionProps{
  areas: Area[];
}

export default function AreaDistribuition(props:AreaDistribuitionProps){
    return(
         <div className="content-card">
          <h3>Distribuição por Área</h3>
          <div className="areas-list">
            {props.areas.map((area) => (
              <div key={area.id} className="area-item">
                <span className="area-name">{area.nome}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "40%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}