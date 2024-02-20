import './App.css';
import { useEffect , useState} from 'react';

function App() {
  const [user, setUser] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect( () =>{
    console.log("UseEffect for Users")
    GetUsers();
  }, []); // empty arrays means useEffect get call only once

  async function GetUsers(){ //fetching data here
    try{
      const res = await fetch("http://localhost:8080/user");
      const data = await res.json();
      setUser(data); // setting data in eseState
      setLoading(false);
    }catch(err){
      console.log(err);
    }
  }
  return loading ? ("Loading...") :  (
      <div>
        {user.map( ({id, name})=>{
          return <h4>Id is : {id} , Name is : {name}</h4>
        })} 
      </div>
  )
}

export default App;
