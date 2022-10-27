import { useEffect, useState } from "react";
import { deletePost } from "../../managers/PostManager";
export const MyPostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/posts`)
      .then((response) => response.json())
      .then((postArray) => {
        setPosts(postArray);
      });
  }, []);

  return (
    <table className="minimalistBlack">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Category</th>
          <th>Tags</th>
        </tr>
      </thead>
      {posts.map((post) => (
        <tbody key={post.id}>
          <tr>
            <td>{post.title}</td>
            <td>
              {post.user.first_name} {post.user.last_name}
            </td>
            <td>{post.publication_date}</td>
            <td>{post.category.label}</td>
            <td>{post.tags}</td>
          </tr>
        </tbody>
      ))}

      {/* used to delete the content of the post.
    need to find a way to bring in a delete function
    need to find a way to import the delete function
    from server side and migrate it to the client side  */}
      <button
        onClick={() => deletePost(posts.id).then(() => navigate("/posts"))}
      >
        Delete Post
      </button>
    </table>
  );
};
