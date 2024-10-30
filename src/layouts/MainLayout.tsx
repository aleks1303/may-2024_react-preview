import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponents from "../components/footer/FooterComponents";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            {/*/!*цей заміняємий контент буде Outlet*!/*/}
            {/*here will be replaceable content*/}

            <Outlet/>
            <FooterComponents/>
        </div>
    );
};

export default MainLayout;