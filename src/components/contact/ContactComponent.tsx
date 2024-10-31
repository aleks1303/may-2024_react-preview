import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const ContactComponent:FC<any>  = ({contact}) => {

    // викликаємо функцію для button
    const navigate = useNavigate();
    const onClickNavigateHandler = ()=>{
        navigate(contact.id.toString(), {state:{contact}})
    }


    return (
        <div>
            {contact.email} <NavLink className={'m20'} to={contact.id.toString()} state={{contact}}>details</NavLink>

        {/*    ще це можна зробити не тільки за допомогою Navlink
               ще можна використати button  */}
            <span className={'m20'}>or</span>
            <button
                onClick={onClickNavigateHandler}
            >details by button</button>
        </div>
    );
};

export default ContactComponent;