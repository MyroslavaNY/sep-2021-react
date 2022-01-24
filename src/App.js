
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import {postService} from "./services/post.service";

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState(null);

    const getUser = (user) => {
        setUser(user)
    }
    const getUserId = (id) => {
      postService.getByUserId(id).then(value => setPosts([...value]))
    }
  return (
    <div>
      <div>
        <Users getUser={getUser}/>
          {user && <UserDetails user={user} getUserId={getUserId}/>}
      </div>
        {!!posts.length &&<Posts posts={posts}/>}
    </div>
  );
}

export default App;
