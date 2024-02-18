import './App.css';
import Nav from './navbar/Nav';
import "./navbar/Nav.css"

function App() {
  let os = ["Android", "BlackBerry", "iPhone", "Windows Phone"];
  let man = ["Samsung", "HTC", "Microsoft", "Apple"];
  return (
    <div className="App">
      <Nav/>
      
      <div>
        <h1 className='test'>Mobile Operating System</h1>
        <ul>{os.map( (el) => {
          return <GetOs o = {el}/>
        })}</ul>
      </div>
      
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul>{man.map( (el) => {
          return <GetMan m = {el}/>
        })}</ul>
      </div>
    </div>
  );
}

function GetOs({o}){
  return <li> {o} </li>
}
function GetMan( {m} ){
  return <li> {m} </li>
}
export default App;
