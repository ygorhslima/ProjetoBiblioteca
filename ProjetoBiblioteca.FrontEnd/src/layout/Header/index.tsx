import './style.css';
import ButtonHamburger from '../../components/UI/ButtonHambuguer';
import type HeaderProps from './HeaderProps';

export default function Header({ onToggleMenu }: HeaderProps) {
    return (
        <header>
            <ButtonHamburger onClick={onToggleMenu}/>
            <h1>Biblioteca Online</h1> 
        </header>
    )
}