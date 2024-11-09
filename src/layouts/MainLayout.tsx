import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";


const MainLayout = () => {
    const [icon, setIcon] = useState<string>('')
    const loadIcon = (iconLInk:string) => {
        setIcon(iconLInk)
    }
    return (
        <div>
            <Menu icon={icon}/>
            <Outlet context={loadIcon}/>
        </div>
    );
};

export default MainLayout;