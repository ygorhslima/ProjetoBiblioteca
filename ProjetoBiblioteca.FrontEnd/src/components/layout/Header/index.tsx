import './style.css';
import ButtonHamburger from '../../UI/ButtonHambuguer';
import type HeaderProps from '../../../interfaces/HeaderProps';

export default function Header({ onToggleMenu }: HeaderProps) {
    return (
        <header>
            <ButtonHamburger onClick={onToggleMenu}/>
            <h1>Biblioteca Online</h1> 
        </header>
    )
}