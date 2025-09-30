import React, { useState } from 'react'

const ToDoApp = () => {
    const[text,setText]=useState('')
    const[todos,setToDo]=useState([])
    const handleSubmit=(e)=>{
 e.preventDefault(); 
  if (!text.trim()) return;  
 setToDo((prev)=>{
    const newTodo={
        id:Date.now(),
        text:text,
        done:false

    }
    console.log("adding todo ", newTodo)
    return[...prev,newTodo]
 }
    )
 
 setText('')
    }
    const handleToggle=(id)=>{
        setToDo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                return todo.id===id ? {...todo,done:!todo.done} : todo
            })
        })

    }
    //delete
    const handleDelete=(id)=>(
        setToDo((prevtodo)=>(
            prevtodo.filter(todo=>todo.id !== id)
        ))
    )
  return (
    <div style={{width:'600px', margin:'50px auto' ,gap:'20px',padding: '20px',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',}}>
        <h1 style={{ marginBottom: '20px' }}>Todo-List-App</h1>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}> 
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Your Todo..'  style={{
            flex: 1,
            padding: '10px 15px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
          }}/>
            <button type='submit'style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ff512f, #dd2476)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')} disabled={text.trim()===""}>Add TODO</button>
            <button 
  type="button" 
  onClick={() => setToDo([])} 
  style={{
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginLeft: '10px'
  }}
  onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
>
  Clear
</button>

                
        </form>
        <div>
                <h2>Your list: {todos.length}</h2>
                {todos.length === 0 && <p style={{color:"black",padding:'8px'}}>No tasks yet — add one above.</p>}

                <ul  style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            
          }}>
                    {todos.map((todo) => (
                        <li key={todo.id} style={{
                padding: '12px',
                borderRadius: '8px',
            backgroundColor:'green',
                fontSize: '20px',
                transition: 'all 0.3s ease',
                
              }}
            //   onMouseOver={(e) => (e.target.style.background = 'rgba(255,255,255,0.4)')}
            //   onMouseOut={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
            >
                <input type="checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)} />
                
                 <span style={{ marginLeft: "10px",textDecorationLine: todo.done ? "line-through" : "none",
    textDecorationColor: todo.done ? "red" : "black",}}>
                {todo.text}
              </span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
                    ))}
                </ul>
            </div>
          

    </div>
  )
}

export default ToDoApp