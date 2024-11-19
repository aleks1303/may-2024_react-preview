import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'users'}>users</NavLink></li>
                <li><NavLink to={'posts'}>posts</NavLink></li>

            </ul>

        </div>
    );
};

export default HeaderComponent;