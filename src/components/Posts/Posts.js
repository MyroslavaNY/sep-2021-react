import post from "../Post/Post";
import Post from "../Post/Post";

const Posts = ({posts}) => {

    return(
        <div>
            {posts.map ( post => <Post key={post.id} posts={posts}/>)}
        </div>
    )
}
export default Posts;