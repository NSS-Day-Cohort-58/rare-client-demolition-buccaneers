import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const { postId } = useParams()
    const [post, updatePost] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}`)
                .then(response => response.json())
                .then((data) => {
                    updatePost(data)
                })
        },
        [postId]
    )

    return <section className="post" >
        <header className="post__header"><h2>{post?.title}</h2></header>
        <div>Author: {post?.user?.username}  </div>
         <div>Category: {post?.category?.label} </div>
        <div>Publication Date: {post?.publication_date} </div>
        <div>Content: {post?.content} </div>
        <footer className="post__footer"></footer>
    </section>
}
