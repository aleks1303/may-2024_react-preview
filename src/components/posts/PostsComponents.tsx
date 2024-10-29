import React, {FC, ReactNode} from 'react';
import {IPost} from "../../model/IPost";
import PostComponent from "../post/PostComponent";

type IProps = {posts: IPost[]} & {children?:ReactNode}

const PostsComponents:FC <IProps>= ({posts}) => {

    return (
        <div>
            {
               posts.map(post =>
                   <PostComponent
                   id={post.id}
                   userId={post.userId}
                   title={post.title}
                   body={post.body}/>
               )
            }
        </div>
    );
};

export default PostsComponents;