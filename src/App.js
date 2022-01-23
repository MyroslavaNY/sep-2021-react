import Users from "components/Users";
import UserDetails from "components/UserDetails";
import Posts from "components/Posts"
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Users/>
        <UserDetails/>
      </div>
      <Posts/>
    </div>
  );
}

export default App;
