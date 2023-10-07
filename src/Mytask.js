import React,{ useState } from 'react';
// import './App.css';

function Mytask() {
  //basic useState
    
//  const [varName,setName]= useState('')
//  const [Email,setEmail]= useState('')
//  const [age,setage]= useState()
//  const [Phone,setPhone]= useState()
//  const [gender,setgender]= useState('')

 
    //advance useState

    const [userDetail,setUser]=useState({
      varName:'',
      Email:'',
      age:'',
      Phone:'',
      country:'',
      gender:'',
      Date:'',
      agree:''
    })

const change=(eve)=>{
  const {name,value} =eve.target;

    //basic useState
  // if(name === 'varName'){
  //   setName(value)
  // }
  // else if(name === 'Email'){
  //   setEmail(value)
  // }
  // else if(name ==='age'){
  //   setage(value)
  // }
  // else if(name ==='Phone'){
  //   setPhone(value)
  // }


  setUser((prev)=>({
    ...prev,
    [name]:value
  }))
}
const submitBtn = ()=>{
  console.log(userDetail);
}
return (
    <div className="App">
      <h1>Register form</h1>
      <label>Name</label> 
      <input name="varName"  value={userDetail.varName} placeholder='username' onChange={change} /> 
      <br/>
      <br/>
      <label>Email</label> 
      <input name="Email" value={userDetail.Email} placeholder='email' onChange={change} />
      <br/>
      <br/>
      <label>age</label> 
      <input name="age"  value={userDetail.age} placeholder='age' onChange={change} />

      <br/>
      <br/>
      <label>Phone</label> 
      <input name="Phone" value={userDetail.Phone} placeholder='phone' onChange={change} />
      <br/>
      <br/>
      <label>county</label> 
      <select name="country" value={userDetail.country} onChange={change} >
        <option >select</option>
        <option value='India'>India</option>
        <option value='UAE' >UAE</option>
        <option value='USA' >USA</option>
      </select>
      <br/>
      <br/>
      <label>Gender</label> 
      <input type="radio" name='gender' value={userDetail.gender}    onChange={change} />male
      <input type="radio" name='gender' value={userDetail.gender}  onChange={change} />Female
      <br/>
      <br/>
      <label>select Date</label>
      <input name='Date' value={userDetail.Date} onChange={change} type='date' />
      <br/>
      <br/>
      <label>Agree</label>
      <input  value={"yes agree"+userDetail.agree} type="checkbox" name="agree" onChange={change} />
      <br/>
      <br/>
      
      
      <button onClick={()=>submitBtn()} >Submit</button>
      
    </div>

  );
}

export default Mytask;