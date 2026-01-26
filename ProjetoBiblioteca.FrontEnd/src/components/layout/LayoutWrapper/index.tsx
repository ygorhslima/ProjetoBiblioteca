import { useState } from "react";
import Header from "../Header";
import SideBar from "../SideBar";

interface LayoutProps{
    children: React.ReactNode;
}

export default function LayoutWrapper({children}:LayoutProps)
{

    const [isSidebarOpen, setIsSetbarOpen] = useState(true);
    
    const onToggleMenu = () =>{
        setIsSetbarOpen(!isSidebarOpen);
    }

    return(
        <div className="app-layout">
            <Header onToggleMenu={onToggleMenu}/>
            <div className="content-area">
                <SideBar isOpen={isSidebarOpen}/>
                
                {/*o main é onde as páginas serão renderizadas*/}
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}