import logo from './logo.svg';
import './App.css';

function App() {
  let age = 27;
  let name = ["Nandita", "Tarun", "Ankita", "Shilpi", "Aman"];
  let marks = [76, 98, 89, 84, 91];
  let num = [8,7,6,5,4];

  return (
    <div className="App">
      <button>Click</button>
      <input type="number"/>
      <img src='https://th.bing.com/th/id/OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo?rs=1&pid=ImgDetMain'/>
      <div>1+2+3 = {1+2+3}</div>
      <div>You are {age>=18 ? "Eligible":"Not Eligible"} for driving licence</div>

      <div>Names are :  {/* We can write directly in HTML also */}
        <ul>
          {name.map((e) => {
            return <li>{e}</li>
          })}
        </ul>
      </div>
 {/* We can create an component of an array and use map function in that component, and directly render that component */}
      <div> Marks are : 
          {marks.map( (e) => {
            return <GetMarks m={e}/>  // Component call-----------
          })}
      </div>
{/* We can use here props also, everything we are passing in arguement, it will work as an object 
    Props =  it is properties*/}
      <div> Numbers are : 
        {num.map( (e) => {
          return <GetNumber nums = {e} name= {"Nandita"}/>
        })}

      </div>
    </div>
  );
}

// Component-----------
function GetMarks({m}){
  return <p> Marks : {m} </p>
}
function GetNumber(props){
  return <p> Here are some number {props.nums} with name {props.name}</p>
}
export default App;
