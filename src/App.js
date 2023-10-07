import React,{ useState } from 'react';
import './App.css';

function App() {

  const [count,setcount]=useState(0)

  // let myh="vignesh"


  // const [Myname,setname] = useState('')
// const [Myage,setage] = useState()

// const mychange=(e)=>{
//   const {name, value} = e.target;
  
//   if(name === 'Myname'){
//     setname(value)
//   }

//   else if(name === 'Myage'){
//     setage(value)
//   }

// }

// const handlesubmit = () =>{
//   console.log({Myname, Myage});
// }

const changename = ()=>{
  setcount((prev)=>prev+10)
  }

const changecount= ()=>{
  setcount((prev)=>prev-10)
}
  return (
    <div >
     
      {/* <sample/>
     <input name='Myname' value={Myname}  onChange={mychange} />
     <input name='Myage' value={Myage}    onChange={mychange} />

     <button onClick={()=>handlesubmit()} >click</button> */}
    <h3>{count}</h3>
     <button onClick={changename} >addcounter</button>
     <button onClick={changecount} >removecount</button>
    </div>
  );
}

export default App;
