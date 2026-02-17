import { Link } from "react-router-dom";
import "./style.css";
import type SideBarProps from "../../../interfaces/SideBarProps";
import { useLibrary } from "../../../context/LibraryContext";
import { ChevronDown, Droplet } from "lucide-react";
import { useState } from "react";
import { ADMIN, PATHS } from "../../../constants";

export default function SideBar({ isOpen }: SideBarProps) {
  const { areas } = useLibrary();
  const [dropdown, setDropdown] = useState(false);
  const [dropdownAdmin, setDropdownAdmin] = useState(false);
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="div_dropdown ">
          <button
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            <ChevronDown color="white" />
          </button>
          <p style={{ color: "white" }}>Catálogo</p>
        </div>

        {dropdown ? (
          <div>
            <div className="view-books">
              <Link to={`${PATHS.HOME}`} className="link">
                Todos os livros
              </Link>
            </div>
            <div className="view-books">
              {areas.map((el) => (
                <Link
                  key={el.id}
                  to={`${PATHS.HOME}/${el.id}`}
                  className="link"
                >
                  {el.nome}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="view-books">
          <Link to={`${PATHS.LOGIN}`} className="link">
            Login
          </Link>
        </div>

        <div className="view-books">
          <Link to={`${PATHS.REGISTER}`} className="link">
            Cadastro
          </Link>
        </div>

        <div className="div_dropdown">
          <button
            onClick={() => {
              setDropdownAdmin(!dropdownAdmin);
            }}
          >
            <ChevronDown color="white" />
          </button>
          <p style={{ color: "white" }}>Admin</p>
        </div>

        {dropdownAdmin ? (
          <div>
            <div className="view-books">
              <Link to={`${PATHS.ADD_BOOKS}`} className="link">
                Adicionar livros
              </Link>
            </div>
            <div className="view-books">
              <Link to={`${ADMIN.DASHBOARD}`} className="link">Dashboard</Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
