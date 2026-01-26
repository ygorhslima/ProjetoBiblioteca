import '../style.css';

interface BookCardProps{
    codigo:number;
    titulo:string;
    autor:string;
    area:string;
    ano:number;
    editora:string;
};

export default function BookCard(props:BookCardProps) {
  return (
    <div className="book-card">
        <div className="info-container">
          <h1 className='info-h1'>{props.titulo}</h1>
          <div className="infos">
            <div>
              <p>Código: {props.codigo}</p>
              <p>Autor: {props.autor}</p>
            </div>
            <div>
              <p>Area: {props.area}</p>
              <p>Ano: {props.ano}</p>
              <p>Editora: {props.editora}</p>
            </div>
          </div>
        </div>
    </div>
  );
}
