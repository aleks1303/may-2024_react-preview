import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponents from "../../components/footer/FooterComponents";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <h2>You have entered an incorrect link</h2>
            <FooterComponents/>
        </div>
    );
};

export default ErrorLayout;