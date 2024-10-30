import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span><NavLink to={'about'}>about</NavLink></span>
            <span><NavLink to={'contacts'}>contacts</NavLink></span>

            {/*це не правильна лінка для перевірки помилки*/}
            <span><NavLink to={'asasdas'}>asasdas</NavLink></span>
            <hr/>
        </div>
    );
};

export default HeaderComponent;