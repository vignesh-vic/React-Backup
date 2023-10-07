import './App.css';
import React, {useEffect, useState } from 'react'

export default function CRUD() {

  const initialData = [{        //initial table values
    myName:'Vignesh',
    myAge:21,
    email:'vignesha01@gmail.com'
  }]


const [myDetails,setDetails]=useState(initialData) //initial State

  const [name, setName] = useState('')
  const [age, setAge] = useState()      //
  const [email, myEmail] = useState('')

const onClickHand =()=>{
  if(name&&age&&email){
  setDetails((prev) =>{
    const neList=[...prev];
    neList.push({myName:name,myAge:age,email:email})
    return neList;
  });
}
else{
setName('')
setAge('')
myEmail('')
}
}
useEffect(() => {
  if (myDetails.length > initialData.length) {
    const fetchData = myDetails[myDetails.length - 1];
    alert(`New row inserted:   myname:${fetchData.myName} myage:${fetchData.myAge}`);
  }
}, [myDetails]);
  return (

    <div className=''>
                      {/* {
                margin: 10px;
                padding: 1px;
            }
            table, td, th {
                border: 1px solid;
                padding: 7px;

              }
              
              table {
                text-align: center;
                width: 60%;
                border-collapse: collapse;
              } */ }
      <input name='name' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
      <input name='age' placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} /><br/>
      <input name='email' placeholder='email'  value={email} onChange={(e)=>myEmail(e.target.value)} /><br/>
      <button onClick={onClickHand} >submit</button>

      {/* conditional chaning*/}
      {myDetails.length > 0 ? (
      <table style={{border: '2px solid black'}}>
        <thead>
          <tr>
          <th colSpan={3}>User Details</th>
          </tr>
          <tr>
            <th >Name</th>
            <th >Age</th>
            <th>Email</th>
          </tr>

        </thead>

        <tbody>

          {myDetails.map((x) => (
            <tr>
             <td>{x.myName}</td>
             <td>{x.myAge}</td>
             <td>{x.email}</td>
            </tr>
          ))}

        </tbody>

      </table>):(<h2>NO Data to show</h2>)}
    </div>

  );
}
