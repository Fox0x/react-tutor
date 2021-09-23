import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    //Управляем 2 инпутами с помощью передачи объекта
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {...post, id: Date.now()}
        // С помощью коллбека передаём новый пост наверх в апп
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type={'text'}
                placeholder={'Post title'}
                onChange={event => setPost({...post, title: event.target.value})}/>

            <MyInput
                value={post.body}
                type={'text'}
                placeholder={'Post body'}
                onChange={event => setPost({...post, body: event.target.value})}/>

            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;