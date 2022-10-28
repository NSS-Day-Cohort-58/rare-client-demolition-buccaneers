import { useState, useEffect, navigate } from "react";
import { useParams } from "react-router-dom";
import { deletePost } from "../../managers/PostManager";
import "./Posts.css";

export const MyPostPage = () => {
  const { postId } = useParams();
  const [post, updatePost] = useState();

  useEffect(() => {
    fetch(`http://localhost:8088/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        updatePost(data);
      });
  }, []);
  return (
    <section className="post">
      <header className="post__header">
        <h1>{post?.title}</h1>
      </header>
      <div className="post_category">
        <h2>{post?.category?.label}</h2>
      </div>
      <div className="image">
        {" "}
        <img src={post?.image_url} alt="" width="160" height="90" />{" "}
      </div>
      <div>
        <div className="post_author">
          <h1>
            By: {post?.user?.first_name} {post?.user?.last_name}{" "}
          </h1>{" "}
        </div>
        <button className="post_button">Comments</button>
      </div>
      <div>{post?.user?.bio} </div>
      <footer className="post__footer"></footer>
      <button
        onClick={() => deletePost(post.id).then(() => navigate("/posts"))}
      >
        Delete Post
      </button>
      ;
    </section>
  );
};
{
  /* used to delete the content of the post.
    need to find a way to bring in a delete function
    need to find a way to import the delete function
    from server side and migrate it to the client side  */
}
