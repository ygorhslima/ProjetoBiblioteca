import './style.css';
import ButtonHamburger from '../../UI/ButtonHambuguer';

interface HeaderProps {
    onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
    return (
        <header>
            <ButtonHamburger onClick={onToggleMenu}/>
            <h1>Biblioteca Online</h1> 
        </header>
    )
}