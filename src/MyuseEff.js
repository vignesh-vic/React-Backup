import React, { useEffect, useState } from 'react'

function MyuseEff() {

    const [myName,setName]=useState('vignesh')
    const [myAge,setAge]=useState(21)
    


useEffect(()=>{
    if (myAge===25) return;
    consoleChange()
},[myAge,myName])



const  consoleChange=()=>{
    console.log(`useEffect ${myAge} ${myName}` );
}



  return (
    <div>
    <button onClick={()=>{setName('giri')}} > click name</button>{myName}
    <button onClick={()=>{setAge((pre)=>pre+1)} }> click age</button>{myAge}
    </div>
  )
}

export default MyuseEff