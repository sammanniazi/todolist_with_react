//import logo from './logo.svg';
import './App.css';
import './table.css';
  

//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';

import {  useState } from "react";


function App() {
  const[taskvalue,settaskvalue]=useState("");
  const[List,setList]=useState([]);
  const inputchange= event=>{settaskvalue(event.target.value)};
  const submitbutton=() => {setList(todovalue=>todovalue.concat({value:taskvalue}));
  settaskvalue("");


}
return(

<>




<h1>TO DO List</h1>
<input type="text" 

 value={taskvalue}  onChange={inputchange}/>
 

 <button onClick={submitbutton} className="button_submit">add</button>
 <div className="todo-list">



 {List.map((item,index)=>(

<div className="todo">

  {item.value}
  </div>


 


 ))}

  
 </div>
 
 
 


</>
);


  
}

export default App;
