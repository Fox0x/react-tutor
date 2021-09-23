import '../styles/PostItem.css'
import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className={'post'}>
            <div className={'post-content'}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className={'post-btns'}>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>

        </div>
    );
};

export default PostItem;