import React, {FC, useEffect} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useStore} from "./context/store";
import {userService} from "./services/api.service";


// огортаємо нашу розмітку в MyContext
// і тут можемо ділитися всіма компонентами
// дані якими можна ділитися будуть знаходитись в props value


const App: FC = () => {

   const {userStore,userStore:{favoriteUser}} = useStore();
    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data))
    }, []);

  return (
    <>
        <HeaderComponent/>

            <Outlet/>
            <hr/>
        {favoriteUser && <div>{favoriteUser.email}</div>}
            <hr/>

    </>
  );
}

export default App;
