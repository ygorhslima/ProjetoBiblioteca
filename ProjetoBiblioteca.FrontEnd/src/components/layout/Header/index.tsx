import './style.css';
import SearchBar from "../../UI/SearchBar/SearchBar";
import ButtonHamburger from '../../UI/ButtonHambuguer';

interface HeaderProps{
    onToggleMenu:()=>void;
}

export default function Header(props:HeaderProps)
{
    return(
        <header>
            <ButtonHamburger onClick={props.onToggleMenu}/>
            <SearchBar/>
        </header>
    )
}