import React, { useContext } from 'react'
import { GlobalContext } from '../Hooks/context/UseContext'

const ConsumeContext = () => {
    const consumeDataFromContext=useContext(GlobalContext)
  return (
    <div> 
        <h1>ConsumeContext</h1>
<p>Name: {consumeDataFromContext.name} age: {consumeDataFromContext.age}</p>

    </div>
  )
}

export default ConsumeContext