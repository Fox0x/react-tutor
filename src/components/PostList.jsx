import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center', color: '#72ffff'}}>Постов нет</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center', color: '#72ffff'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames={'post'}
                    >
                        <PostItem remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;