import React from 'react'

export default function Map() {
  
    //USER age print in doubled

    // const userAge=[2,20,18,24,25,26,33,45] 
    // const doubleAge=userAge.map((getage)=>{
    //     return <h3>{getage*2}</h3>
    // })
    
    
    //exaple for react map
    // const myFriuts=['apple','orange','banana','pine-apple','mango']
    // const iterate=myFriuts.map((value, ins,fullar)=>{
    //   return <h4>{value}</h4>
    // })
  
//   //exmaple using array object
//  const myList =[
//     {
//       myName:'vignhesh',
//       myAge:22,
//       Mycourse:'MCA'
//     },{
//       myName:'renu',
//       myAge:24,
//       Mycourse:'MCA'
//     }
//     ,{
//       myName:'giri',
//       myAge:21,
//       Mycourse:'Msc'
//     }
//     ,{
//       myName:'ram',
//       myAge:22,
//       Mycourse:'Msc'
//     }

//  ]

//  const getList=myList.map((values)=>{
//   return   <h5>{values.myName} </h5>
//  })

// const employees = [
//   { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//   { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//   { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//   { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];
// const myEmp=employees.map((getval)=>{
//   return {employees:getval.name,salary:getval.salary}
// })
//-----------------------------------------------------------------------------------------FILTER

//FILTER method
// const employees = [
//   { name: "Adam", salary: 15, bonus: 500, tax: 1000 },
//   { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//   { name: "Fabiano", salary: 1355, bonus: 500, tax: 200 },
//   { name: "Alireza", salary: 4559, bonus: 1000, tax: 900 },
// ];
// const myEmp=employees.filter(getval=> {
//   return getval.salary %2!=0 
// });

// console.log(myEmp);



// filter method to get even numbers

const evenNum=[1,2,3,4,5,6,7,8,9,12,23,34,56,57,58,60]

const getEven=evenNum.filter((value)=>{
  return  value%2==0
})
console.log(getEven);


//get phone price using filter method 
const phoneCart=[
  {id:1, items:'android Phones', cost:6000},
  {id:2, items:'Iphone ', cost:25000},
  {id:3, items:'tablet phones ', cost:7000},
  {id:4, items:'button phones ', cost:2000},
  {id:5, items:'window phones ', cost:19000},
]
//low price mobiles
const getLowCost=phoneCart.filter((value)=> value.cost<10000)
console.log("LOW price",getLowCost);

//High price mobiles
const getHighCost=phoneCart.filter((value)=> value.cost>10000)
console.log("High price",getHighCost);


const myde={
  name:'vicky',
  age:21,
gen:'male'
}
for(let key in myde){
  console.log(key);
}
 return (
    <div>
        {/* {doubleAge} */}
        <h1>example for react map</h1>
        {/* {iterate} */}
        {/* {getList} */}
        {getEven}
    </div>
  )
}
