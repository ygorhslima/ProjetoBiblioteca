import "./style.css";
import { MenuSquare } from "lucide-react";
import type ButtonProps from "../../../interfaces/ButtonProps";


const ButtonHamburger = ({onClick}:ButtonProps) => {
  return (
    <button onClick={onClick}>
      <MenuSquare color="white" />
    </button>
  );
};

export default ButtonHamburger;
