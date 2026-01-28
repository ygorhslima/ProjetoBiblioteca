
import BookList from "../../components/Books/BookList";
import './style.css'

export default function Home() {
  return (
    <>
      <div className="banner-home">
        <div>
          <h3>Biblioteca Online</h3>
          <p>Aqui você encontra o todos os livros disponíveis da biblioteca</p>
        </div>
      </div>
      <BookList />
    </>
  );
}
