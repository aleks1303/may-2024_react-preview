import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {MyContext, useContextProvider} from "../context/ContextProvider";

const HeaderComponent = () => {

    // // цим передаємо в цей компонент дані
    // // можна це зробити через свій власний hook
    // const obj = useContext(MyContext);
    // console.log(obj.userStore.allUsers)

    // // передача через свій hook
    // const obj = useContextProvider();
    // console.log(obj.userStore.allUsers);
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'userPosts'}>userPosts page</Link></li>

            </ul>
        </div>
    );
};

export default HeaderComponent;