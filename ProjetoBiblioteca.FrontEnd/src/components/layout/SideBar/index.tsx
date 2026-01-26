import { Link } from 'react-router-dom';
import './style.css'

interface SideBarProps{
    isOpen:boolean;
}
export default function SideBar({isOpen}:SideBarProps)
{
    return(
        <>
           {isOpen && (
            <div className='sidebar'>
                <Link to={`/livros`}>Todos os livros </Link>
                <Link to={`/livros/1`}>Ficção Científica</Link>
                <Link to={`/livros/2`}>Fantasia</Link>
                <Link to={`/livros/3`}>Biografia</Link>
                <Link to={'/livros/4'}>História</Link>
                <Link to={'/livros/5'}>Tecnologia</Link>
                <Link to={'/livros/6'}>Suspense</Link>
            </div>
           )}
        </>
    )
}