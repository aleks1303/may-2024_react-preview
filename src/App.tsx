import React, {FC, useEffect} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {postService, userService} from "./services/api.service";

const App:FC = () => {

    useEffect(() => {
        userService.getUsers().then(value => console.log(value.data))
        postService.getPosts().then(value => console.log(value.data))
    }, []);
  return (
    <div>
        <HeaderComponent/>
        <Outlet/>
    </div>
  );
}

export default App;
