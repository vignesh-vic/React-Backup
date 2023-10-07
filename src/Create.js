import React,{ useEffect, useState } from 'react';

function App() {
const [userDetails,setDetails]=useState(
  [
    {
    id:0,
    userName:'ram kumar',
    userAge:'21',
    userDob:'11.2001'
},
    {
    id:1,
    userName:'vignesh ',
    userAge:'22',
    userDob:'12.2002'
}

]
) //Table


const [formData, setFormData] = useState(
  {
    userName: "",
    userAge: "",
    userDob: "",
  }
); 

const onHandleChange =(e)=>{
    const {name, value}=e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }




const handleSubmit = (e) => {
  e.preventDefault();
  if(!formData.userName || !formData.userAge || !formData.userDob){
  return;
}
else{
  setDetails((prev) => (
    [
   ...prev,
      {id: userDetails.length + 1, ...formData}
    ]
  ))
}
}


return (
    <div >
      <form onSubmit={handleSubmit}>
       <input name='userName' value={formData.userName} onChange={onHandleChange}
          placeholder='username' /> <br/>
        <input name='userAge' value={formData.userAge} onChange={onHandleChange}  placeholder='userage' /> <br/>
        <input name='userDob' value={formData.userDob}  onChange={onHandleChange} placeholder='userDOB' /> <br/>
        <button>Submit</button>
        </form>
      {

<table >
<thead>
   <tr >
    <th>Name</th>
    <th>userage</th>
     <th>userDob</th>
  </tr>
    </thead>
    <tbody>
        {
          userDetails.map((item) => (
           <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.userAge}</td> 
                <td>{item.userDob}</td> 
            </tr>
          ))
        }
         </tbody>
     </table>
      }
    
      
    </div>

  );
}

export default App;