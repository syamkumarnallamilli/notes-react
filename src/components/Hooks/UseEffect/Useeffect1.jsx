// ==> Running Only Once (On Mount)
//will fetch a list of users from an API and display them.


import { useEffect,useState } from "react";
const UserList=()=>{
    const[users,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users") //fetch is a JavaScript function used to request data from an API. It returns a Promise.
        .then((response)=>response.json())
        .then((data)=>setUser(data)) //store data in state
        .catch((error) => console.error("Error fetching users:", error));
    },[]) //Runs only once (empty dependency array)
    return(
        <div>
            <p>UserLists</p>
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>{user.email}</li>
                ))
            }
        </ul>
        </div>
    )
}
export default UserList



// detailed breakdown

//==> 1. fetch() - Fetching Data from an API

//fetch(url) sends a request to the given URL and returns a Promise.

//fetch("https://jsonplaceholder.typicode.com/users")

//This sends a GET request to the API.

//==>2. .then(response => response.json()) - Handling the Response
//fetch returns a Response object, which contains raw data.
//We use .json() to extract JSON data.
//.then((response) => response.json())
//response.json() also returns a Promise, which resolves to the actual JSON data.

//==>3. .then((data) => setUsers(data)) - Updating State
//Once the JSON data is available, we store it in users state.
//.then((data) => setUsers(data))
//setUsers(data) updates the component state, triggering a re-render.

//==>4. .catch((error) => console.error("Error:", error)) - Handling Errors
//If the request fails, .catch() is executed.
//.catch((error) => console.error("Error fetching users:", error));
//Helps debug network issues.


//5. (5) useEffect(() => {...}, []) - Running Effect Only Once


//The empty dependency array [] means:

//--The effect runs only once when the component mounts.

//--It does not re-run on re-renders.