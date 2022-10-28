import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { Categories } from "../components/categories/Categories"
import { TagsList } from "../components/tags/TagsList"
import { Tags } from "../components/tags/Tags"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        <Route path="categories" element ={<Categories/>}/>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/tags" element={<TagsList />} />
        <Route path="/tags/:tagId" element={<Tags />} />
      </Route>
    </Routes>
  </>
}
