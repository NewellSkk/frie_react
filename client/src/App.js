import { useState,useEffect } from 'react';
import Card from './Card';


const App =()=>{
  let [users,setUsers]=useState([]);
  useEffect(()=>{
   
    fetch("/users").then(
      res=>res.json()
    ).then(
      data =>{setUsers(data)}
    )
  },[])  

  console.log(users)
  let disp =  users.map((user,index)=>{
      return(
        <Card key={index} name={user.name} email={user.email} username={user.username}/>
      );
  })

  const submitUser = async() =>{
    const myData =   {
      name: 'Chandler Bing',
      username: 'C.Bing',
      email: 'Being.Bing@friends.tv'
    }
    const result = await fetch("/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(myData)
    })
    const resultInJson = await result.json();
    console.log(resultInJson);
  }
  return(
    <>
      <button className='br-bill grow bw1 dib fw6 blue' onClick={submitUser}>Submit New Data</button>

      <div className='flex flexwrap'>
          {disp} 

      </div>
    </>  
  )  
}

export default App