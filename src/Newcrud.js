import React, { useState } from 'react'
import './App.css'
export default function Newcrud() {


//initial input filed useState
const [inputDetails,setInput]=useState([
    {
        empRoll:'',
        empName:'',
        empAge:'',
        empEmail:'',
        empCountry:'',
        empGender:'',

    }
]) 

//change button
const [isEdit, setIsEdit] = useState(false);



//initial table values  shows in table

const initialData=[
{   empRoll:1,
    empName:'karthick',
    empAge:23,
    empEmail:'karthick@gmail.com',
    empCountry:'india',
    empGender:'Male'
},
{
    empRoll:2,
    empName:'kumar',
    empAge:20,
    empEmail:'kumar@gmail.com',
    empCountry:'USA',
    empGender:'Male'

},
{
    empRoll:3,
    empName:'Arun',
    empAge:21,
    empEmail:'Arun@gmail.com',
    empCountry:'india',
    empGender:'Male'

}

]
//alreay some values in useState
const [empDetails,setDetails]=useState(initialData);


//onchange to set input values to inputDetails
const onHandleChange=(e)=>{
    const {name,value}=e.target;
    setInput((prev)=>({
        ...prev,
        [name]:value

    }))
}



//submit button function
const onHandleSubmit =()=>{
    if(!inputDetails.empName||!inputDetails.empAge||!inputDetails.empEmail||!inputDetails.empCountry||!inputDetails.empGender)return;
    const finIndex=empDetails.findIndex(y=>Number(y.empRoll)===Number(inputDetails.empRoll))
    if (finIndex>-1){
empDetails[finIndex]={
    ...empDetails[finIndex],
    empName:inputDetails.empName,
    empAge:inputDetails.empAge,
    empEmail:inputDetails.empEmail,
    empCountry:inputDetails.empCountry,
    empGender:inputDetails.empGender
}
setDetails([...empDetails])
setInput({ empRoll: '', empName: '', empAge: '', empEmail: '',empCountry:'',empGender:'' });
setIsEdit(false);

    }else{
        const neData=[...empDetails]
        neData.push({
            empRoll:inputDetails.empRoll,
            empName:inputDetails.empName,
            empAge:inputDetails.empAge,
            empEmail:inputDetails.empEmail,
            empCountry:inputDetails.empCountry,
            empGender:inputDetails.empGender,
        });
        setDetails([...neData])
        setInput({empRoll:'',empName:'',empAge:'',empEmail:'',empCountry:'',empGender:''}) //input 
    }
    }





//delete button
const onHandleDelte=(index)=>{
    setDetails((prev)=>{
        const preData=[...prev]
        preData.splice(index,1)
        return preData


    })
    
    setInput({empRoll:'',empName:'',empAge:'',empEmail:'',empCountry:'',empGender:''}) //input 
    setIsEdit(false);

}

//edit button
const onHandleEdit=(index)=>{
    const allData=empDetails[index]
    setInput({
        empRoll:allData.empRoll,
        empName:allData.empName,
        empAge:allData.empAge,
        empEmail:allData.empEmail,
        empCountry:allData.empCountry,
        empGender:allData.empGender
    })
    
    setIsEdit(true);

}
  return (
    <div>
        <h2>Register form</h2>
        <input name='empRoll' placeholder='User Roll'  value={inputDetails.empRoll} onChange={onHandleChange} /> <br/>
        <input name='empName' placeholder='use Name'  value={inputDetails.empName} onChange={onHandleChange} /> <br/>
        <input name='empAge' value={inputDetails.empAge} onChange={onHandleChange} placeholder='user Age' /><br/>
        <input name='empEmail' value={inputDetails.empEmail} onChange={onHandleChange} placeholder='user Email' /><br/>
        <label>Country</label><select name="empCountry" onChange={onHandleChange}>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Uk">Uk</option>
            <option value="Europe">Eroupe</option>
            <option value="Canada">Canada</option>
        </select> <br/>
        <label >Gender</label>
        Male<input type="radio" name="empGender" value="Male" checked={inputDetails.empGender === "Male"} onChange={onHandleChange} />
        FeMale<input type="radio" name="empGender" value="FeMale" checked={inputDetails.empGender === "FeMale"}  onChange={onHandleChange} /> <br />
        <button onClick={()=>onHandleSubmit()} >{isEdit ? 'Update' : 'Submit'}</button> <br />
        <br />
        <br />
        <br />

    <table style={{border: '2px solid black'}}>
        <thead>
          <tr>
          <th colSpan={7}>User Details</th>
          </tr>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
        { empDetails.length>0?(empDetails.map((value,index)=>
 
            <tr key={index}>
                <td>{value?.empRoll}</td>
                <td>{value?.empName}</td>
                <td>{value?.empAge}</td>
                <td>{value?.empEmail} </td>
                <td>{value?.empCountry} </td>
                <td>{value?.empGender} </td>
               <td><button onClick={()=>onHandleEdit(index)} >EDIT</button> 
                <button onClick={()=>onHandleDelte(index)}>DELETE</button>
                </td> 
              </tr>
        
            )):(<tr>
                <td colSpan={8}>NO USERS IN THE TABLE </td>
            </tr>)}
            </tbody> 
    </table>
        
    </div>
        
  )
}
