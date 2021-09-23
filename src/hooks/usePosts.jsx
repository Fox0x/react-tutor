import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    //Сортируем массив
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }

        return posts
    }, [sort, posts])
}

export const usePosts = (posts, sort, query) => {
    //Фильтруем сортированный массив по поиску
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}