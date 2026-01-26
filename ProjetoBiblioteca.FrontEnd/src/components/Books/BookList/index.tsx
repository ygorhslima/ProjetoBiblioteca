import BookCard from "../BookCard";
import '../style.css';

export default function BookList() {
  const livros = [
    {
      codigo: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      area: "Literatura", // Supondo que você trate o Enum como string ou ID
      ano: 1899,
      editora: "Livraria Garnier",
    },
    {
      codigo: 2,
      titulo: "Arquitetura Limpa",
      autor: "Robert C. Martin",
      area: "Informatica",
      ano: 2017,
      editora: "Alta Books",
    },
    {
      codigo: 3,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      area: "Infantil",
      ano: 1943,
      editora: "Agir",
    },
    {
      codigo: 4,
      titulo: "A República",
      autor: "Platão",
      area: "Filosofia",
      ano: -375, // Histórico
      editora: "Penguin Classics",
    },
    {
      codigo: 5,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      area: "Ciencias",
      ano: 1980,
      editora: "Companhia das Letras",
    },
     {
      codigo: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      area: "Literatura", // Supondo que você trate o Enum como string ou ID
      ano: 1899,
      editora: "Livraria Garnier",
    },
    {
      codigo: 2,
      titulo: "Arquitetura Limpa",
      autor: "Robert C. Martin",
      area: "Informatica",
      ano: 2017,
      editora: "Alta Books",
    },
    {
      codigo: 3,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      area: "Infantil",
      ano: 1943,
      editora: "Agir",
    },
    {
      codigo: 4,
      titulo: "A República",
      autor: "Platão",
      area: "Filosofia",
      ano: -375, // Histórico
      editora: "Penguin Classics",
    },
    {
      codigo: 5,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      area: "Ciencias",
      ano: 1980,
      editora: "Companhia das Letras",
    },
     {
      codigo: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      area: "Literatura", // Supondo que você trate o Enum como string ou ID
      ano: 1899,
      editora: "Livraria Garnier",
    },
    {
      codigo: 2,
      titulo: "Arquitetura Limpa",
      autor: "Robert C. Martin",
      area: "Informatica",
      ano: 2017,
      editora: "Alta Books",
    },
    {
      codigo: 3,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      area: "Infantil",
      ano: 1943,
      editora: "Agir",
    },
    {
      codigo: 4,
      titulo: "A República",
      autor: "Platão",
      area: "Filosofia",
      ano: -375, // Histórico
      editora: "Penguin Classics",
    },
    {
      codigo: 5,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      area: "Ciencias",
      ano: 1980,
      editora: "Companhia das Letras",
    },
  ];

  return (
    <div className="book-list">
      {livros.map((el, index) => {
        return (
          <BookCard
            codigo={el.codigo}
            titulo={el.titulo}
            autor={el.autor}
            area={el.area}
            ano={el.ano}
            editora={el.editora}
            key={index}
          />
        );
      })}
    </div>
  );
}
