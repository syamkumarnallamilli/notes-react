import React, { useEffect, useState } from 'react'

const UseffectApi = () => {
const [todo,setTODO]=useState([])
    async function fetchTodos(){
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            const data= await response.json()
            
          setTODO(data)
           localStorage.setItem("todos", JSON.stringify(data))

    console.log("Data saved to localStorage:", data)
        }catch(err){
            alert(err.message)

        }
    }

    //toggle todo
    // function toggleTODO(id){
    //     const updatedTODO=todo.map((item)=>(
    //         item.id===id ? {...item,completed:!item.completed} : todo
    //     ))
    //     setTODO(updatedTODO)
    //     localStorage.setItem("checked",JSON.stringify(updatedTODO))
    // }
    useEffect(()=>{
         // First check localStorage
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      console.log("Loaded from localStorage:", storedTodos);
      setTODO(storedTodos);
    } else {
      // If nothing in localStorage → fetch from API
      fetchTodos();
    }

    },[])
  return (
    <div>
        <h1>-TODO - API-</h1>
        <ul>
            {
todo.map((item)=>(
<li key={item.id}> 
    <input type='checkbox' checked={item.completed}  readOnly
      // onChange={() => toggleTODO(item.id)}
      />
    
    {item.title}</li>
))
        }
        </ul>
        
    </div>
  )
}

export default UseffectApi