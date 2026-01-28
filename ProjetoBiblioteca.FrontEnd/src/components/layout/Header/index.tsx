import './style.css';
import SearchBar from "../../UI/SearchBar/SearchBar";
import ButtonHamburger from '../../UI/ButtonHambuguer';

interface HeaderProps {
    onToggleMenu: () => void;
    onSearch: (text: string) => void; // Adicione aqui
}

export default function Header({ onToggleMenu, onSearch }: HeaderProps) {
    return (
        <header>
            <ButtonHamburger onClick={onToggleMenu}/>
            <SearchBar onSearch={onSearch}/> 
        </header>
    )
}