import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "./UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getOne(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById()
    }, [])

    return (
        <div>
            {
                isLoading
                    ? <MyLoader/>
                    : <div><h1>{post.id}.{post.title}</h1>
                        <hr/>
                        <strong>{post.body}</strong></div>
            }
        </div>
    );
};

export default PostIdPage;