import "../style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../BookCard";
import { useSearch } from "../../context/SearchContext";
import type Livro from "../../../interfaces/Livro";
import type Area from "../../../interfaces/Area";
import FormInputEditLivro from "../../UI/FormInputEditLivro";

export default function BookList() {
  // --- ESTADOS ---
  const [livroSelecionado, setlivroSelecionado] = useState<Livro | null>(null);
  // Armazena a lista completa de livros vinda da API
  const [livros, setLivros] = useState<Livro[]>([]);
  // Controla a exibição do texto "Carregando..." enquanto os dados não chegam
  const [loading, setLoading] = useState(true);
  // Armazena as categorias/áreas disponíveis para filtragem
  const [areas, setAreas] = useState<Area[]>([]);

  // --- HOOKS EXTERNOS ---
  // searchTerm: Captura o texto digitado pelo usuário em um componente de busca global (via Context API)
  const { searchTerm } = useSearch();
  // id: Captura o parâmetro da URL (ex: /livros/1), usado aqui para filtrar por categoria
  const { id } = useParams();

  // --- FUNÇÕES DE BUSCA (API) ---
  // Busca todos os livros no backend
  const fetchLivros = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/livros");
      const data: Livro[] = await response.json();
      setLivros(data);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    } finally {
      setLoading(false); // Desativa o loading independente de sucesso ou erro
    }
  };

  // Busca a lista de áreas/categorias para traduzir o "id" da URL em um "nome"
  const fetchAreas = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/area");
      const data = await response.json();
      setAreas(data);
    } catch (error) {
      console.error("Erro ao buscar áreas", error);
    }
  };

  // --- LÓGICA DE FILTRAGEM ---
  // Esta constante é recalculada sempre que o componente renderiza
  const livrosFiltrados = livros.filter((l) => {
    // 1. Verifica se o termo de busca bate com o título ou autor (case-insensitive)
    const matchesSearch =
      l.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.autor.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Se houver um ID na URL, filtra também pela categoria/área
    if (id) {
      // Encontra o objeto da área que corresponde ao ID numérico da URL
      const area = areas.find((a) => a.id === Number(id));
      // Retorna true apenas se passar na busca E se o nome da área bater com o livro
      return matchesSearch && (area ? l.area === area.nome : false);
    }

    // Se não houver ID na URL, retorna apenas o filtro da busca de texto
    return matchesSearch;
  });

  const onDelete = async (codigo: number) => {
    try {
      const response = await fetch(
        `http://localhost:5002/api/livros/${codigo}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setLivros((prevLivros) =>
          prevLivros.filter((livro) => livro.codigo !== codigo),
        );
      }
    } catch (error) {
      console.error("Erro ao deletar livro", error);
    }
  };

  const onPut = async (livro: Livro) => {
    setlivroSelecionado(livro);
  };

  // --- CICLO DE VIDA ---
  // O useEffect vazio [] garante que as chamadas à API ocorram apenas uma vez (ao montar o componente)
  useEffect(() => {
    fetchLivros();
    fetchAreas();
  }, []);

  // --- RENDERIZAÇÃO ---
  if (loading) return <p>Carregando livros...</p>;

  return (
    <>
      {livroSelecionado && (
        <div className="modal-overlay">
          <div>
            <FormInputEditLivro
              livro={livroSelecionado}
              onClose={() => {
                setlivroSelecionado(null);
                fetchLivros();
              }}
            />
          </div>
        </div>
      )}
      <div className="book-list">
        {/* Verifica se existem livros após os filtros */}
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((el) => (
            <BookCard
              key={el.codigo}
              codigo={el.codigo}
              titulo={el.titulo}
              autor={el.autor}
              area={el.area}
              ano={el.ano}
              editora={el.editora}
              onDelete={() => onDelete(el.codigo)}
              onPut={() => onPut(el)}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Nenhum livro encontrado.</p>
        )}
      </div>
    </>
  );
}
