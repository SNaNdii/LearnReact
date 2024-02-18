import './App.css';

function App() {
  let os = ["Android", "BlackBerry", "iPhone", "Windows Phone"];
  let man = ["Samsung", "HTC", "Microsoft", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div>
        <ul>{os.map( (el) => {
          return <GetOs o = {el}/>
        })}</ul>
      </div>
      <h1>Mobile Manufacturers</h1>
      <div>
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
