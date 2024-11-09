import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css'


type MenuTypeProps = {icon?:string}
const Menu:FC<MenuTypeProps> = ({icon}) => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to={'/'}>home page</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login page</Link>
                </li>
                <li>
                    <Link to={'/auth/resources'}>Auth resources page</Link>
                </li>
                <li>
                    {icon && <li><img src={icon} alt="icon"/></li>}
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;