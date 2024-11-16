import React, {FC} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";
import {useStore} from "../context/store";

interface IProps{
items:UserWithPostsType[]
}
const UserPostsComponent:FC <IProps> = ({items}) => {

const {postStore:{allPosts},userStore:{allUsers}} = useStore();
    return (
        <div>
            {
                items.map(item => <div key={item.id}>
                    {item.name}
                    <ul>
                        {
                            item.posts.map(post => (<li key={post.id}>{post.title}</li>))
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;