import React, {FC, useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {MyContext} from "./context/ContextProvider";
import UserPostsComponent from "./components/UserPostsComponent";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {postService, userService} from "./services/api.service";


// огортаємо нашу розмітку в MyContext
// і тут можемо ділитися всіма компонентами
// дані якими можна ділитися будуть знаходитись в props value


const App: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

  return (
    <>
        <MyContext.Provider value={
            {
                userStore: {
                    allUsers:users
            },
               postStore:{
                    allPosts:posts
               }
        }
        }>
            <HeaderComponent/>
            <Outlet/>
        </MyContext.Provider>



    </>
  );
}

export default App;
