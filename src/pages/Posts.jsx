import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import MyLoader from "../components/UI/loader/MyLoader";
import PostList from "../components/PostList";
import MyPagination from "../components/UI/pagination/MyPagination";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [limit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    const changePage = (page) => {
        setPage(page)
    }


    useEffect(() => {
        fetchPosts().then(r => {
        })
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(sortedAndSearchedPosts.filter(p => p.id !== post.id))
    }

    return (
        <div className='Posts'>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                {/*С помощью коллбека получаем новый пост*/}
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {
                postError &&
                <h2>{postError}</h2>
            }

            {
                isPostsLoading
                    ? <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts'}/>
            }

            <MyPagination page={page} totalPages={totalPages} changePage={changePage}/>
        </div>
    );
}

export default Posts;

