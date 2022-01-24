import './App.css';

import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import userService from "./services/user.service";

function App() {
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  useEffect(()=>{
    userService.getAll().then(value =>{
      setUsers([...value])
          setFilterUser([...value])
    })
  }, [])
  const getFilter = (data) => {
      let filterArr = [...users]
    if (data.name){
      filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
    }
    if (data.username){
      filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
    }
    if (data.email){
      filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
    }
    setFilterUser(filterArr)
  }
  return (
    <div >
    <div>
      <Form getFilter={getFilter}/>
      <Users users={filterUser}/>
    </div>
    </div>
  );
}

export default App;
