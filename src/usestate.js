import React, { useState } from 'react';

export default function () {
    const [mynamede, stname] = useState({
        myname:(''),
        myage:('')
    })

 const Chnagefn=(pre)=>{
    const {name,value}=pre.target;
    stname((prev)=>({
        ...prev,
        [name]:value
    }))
 }  

 const clickcha = ()=>{
console.log(mynamede);
 }

    return (
    <div>
       {/* <h3 > My favorite color is {myname}! </h3>  */}
       {/* <button onClick={()=>{stname('blue')}}>blue</button>
       <button onClick={()=>{stname('red')}}>red</button>
       <button onClick={()=>{stname('pink')}}>pink</button> */}
        <input name='myname' value={mynamede.myname} onChange={Chnagefn} />
        <input name='myage' value={mynamede.mymark} onChange={Chnagefn} />
       <button onClick={()=>clickcha()}>submit</button>

       </div>
  )
}
