import React from "react";
const Destructure=(Props)=>{
    const{username,email,posts}=Props.users
    return(
        <div>
            <h2>prop destructuring</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Posts: {posts}</p>
        </div>
    );
}
export default Destructure