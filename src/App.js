import './App.css';
import {useReducer} from "react";
import {useState} from "react";

const reducer = (state, action)=> {
        switch (action.type) {
            case 'cat':
                return{...state, cat:state.cat}
            case 'dog':
                return {...state, dog:state.dog}
        }
        return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, {cat:'', dog:''});

    let [formState, setFormState] = useState({cat:'', dog:''});
    function onSubmit(e) {
        e.preventDefault();
    }
    function save(e) {
        console.log({[e.target.name]:e.target.value});
       // setFormState(...formState, {[e.target.name]:e.target.value} )
    }
  return (
    <div >
        <form onSubmit={onSubmit}>
            <label>Cat <input type={"text"} value={formState.cat} name={"cat"} onChange={save}/></label>
            <button onClick={()=>dispatch({type:'cat'})}>Save cat</button>
        </form>

      <div>{state.cat}</div>

        <form onSubmit={onSubmit}>
            <label>Dog <input type={"text"} value={formState.dog} name={"dog"} onChange={save}/></label>
            <button onClick={()=>dispatch({type:'dog'})}>Save dog</button>
        </form>
        <div>{state.dog}</div>
    </div>
  );
}

export default App;
