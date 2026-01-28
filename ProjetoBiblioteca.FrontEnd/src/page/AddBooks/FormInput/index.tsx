import "../style.css";

export default function FormInput() {
  return (
    <div className="container-formInput">
      <label>Título</label>
      <input type="text" className="input-add-books" />

      <label>Autor</label>
      <input type="type" className="input-add-books" />

      <label>Ano</label>
      <input type="text" className="input-add-books" />

      <label>editora</label>
      <input type="text" className="input-add-books" />

      <label>Area</label>
      <select name="" className="input-add-books">
        <option value="">Ficção científica</option>
        <option value="">Fantasia</option>
        <option value="">Biografia</option>
        <option value="">História</option>
        <option value="">Tecnologia</option>
        <option value="">Suspense</option>
      </select>

      <button className="btn_addLivro">Adicionar Livro</button>
    </div>
  );
}
