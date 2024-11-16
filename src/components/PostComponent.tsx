import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useStore} from "../context/store";


interface IProps {
    post:IPostModel

}
const PostComponent:FC<IProps>= ({post}) => {
    const {postStore:{setFavoritePost}} = useStore();
    return (
        <div>
            {post.id}. {post.title}

            <hr/>
        </div>
    );
};

export default PostComponent;