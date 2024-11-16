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
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

    const setFavoriteUser = (obj:IUserModel) =>{
        setFavoriteUserState(obj)

    }

  return (
    <>
        <HeaderComponent/>

        <MyContext.Provider value={
            {
                userStore: {
                    allUsers:users,
                    setFavoriteUser: (obj:IUserModel)=> setFavoriteUser(obj),
            },
               postStore:{
                    allPosts:posts
               }
        }
        }>

            <Outlet/>
        </MyContext.Provider>

            <hr/>
        {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>

    </>
  );
}

export default App;
