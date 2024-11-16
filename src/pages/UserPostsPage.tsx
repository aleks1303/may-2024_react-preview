import React, {useEffect, useMemo, useState} from 'react';
import UserPostsComponent from "../components/UserPostsComponent";
import {useStore} from "../context/store";
import {UserWithPostsType} from "../models/UserWithPostsType";


const UserPostsPage = () => {

    const {userStore:{allUsers},postStore:{allPosts}} = useStore();

    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
    const usersWithPostsArray = useMemo(() =>  {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)};
        })
    }, [allUsers, allPosts]);
    useEffect(() => {
        setUserWithPostsState(usersWithPostsArray)
    }, [usersWithPostsArray]);

    return (
        <div>
            <UserPostsComponent items={userWithPostsState}/>
        </div>
    );
};

export default UserPostsPage;