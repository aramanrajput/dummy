import logo from './logo.svg';
import Todo from "./components/Todo"
import style from './App.module.css';
import Title from './components/Title';
import {useState} from "react"

function App() {
  // var count = 0
  // count++
let [count ,setCount]=useState(0)

const [data,setdata]=useState("")
console.log(count)
function add(value){
  //conditional state
  setCount((prev)=>{
    // if(prev==10){

      // return 0
    // }
    // else{
      return prev+value
    // }
  })
}

if(count>10){
  return (<div>maximum limit reached</div>)
}

const handledata = (name)=>{
  setdata(name)
}
var color = "red"
//conditional rendering
  return (
    <div className="App">
{<h1>{count}</h1>}


<Child cb={handledata}></Child>
<Child2 data = {data}></Child2>

    <div style={{backgroundColor:color}} >
    <button disabled={count==12?true:false} onClick={()=> add(1)}>add 1</button>
    <button onClick={()=> add(-1)}>sub 1</button>
    <h3>counter is {count%2==0 ? "Even" : "odd"}</h3>
    </div>




    </div>
  );
}


function Child({cb}){
const data = "this is the data"
cb(data)
}

function Child2({data}){
  return <div>child2 recieved :{data}</div>
}
export default App;
