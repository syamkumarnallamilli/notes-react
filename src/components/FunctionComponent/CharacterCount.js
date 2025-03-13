// // In a social media app like Twitter, users should see how many characters they have left while typing a post.
// import React from "react";
// import { useState } from "react";
// const Character=()=>{
//     const [tweet, setTweet] = useState("");
//     const handle=()=>{
//         console.log(tweet)
//     }
        
//     return(
//         <div style={{marginBottom:"40px"}}>
//         <h3>Tweet</h3>
//         <textarea 
//             placeholder="what's happening?"
//             value={tweet}
//              maxLength={280}
//              onChange={(e)=>setTweet(e.target.value)}
             
//         />
        
//         <p>{280-tweet.length} remaining</p>
//         <button onClick={handle}>Tweet</button>
        
//         </div>
        
        
//     )
// }
// export default Character;



