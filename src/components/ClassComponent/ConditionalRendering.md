Conditional rendering in React means rendering different components, elements, or content based on a condition.



Conditional rendering in React means showing or hiding elements based on conditions (like a user being logged in, a product being in stock, or loading data from an API). It works like if-else in JavaScript but inside React’s JSX.

1️⃣ Using if-else

# example
if(isLoggedIn){
    return <UserDashboard/>
}
else{
    return <LoginForm/>
}


2️⃣ Using Ternary Operator (? :)  

# example
return isLoggedIn ? <UserDashboard/> : <LoginForm/>   



3️⃣ Using Logical && (Show Only When Condition is True)


return isLoggedIn && <UserDashboard/>



4️⃣ Using Logical || (Set a Default Value)

    const value = someData || "Default Value";

==>If someData is truthy, it is used.
==>If someData is falsy (null, undefined, ""), "Default Value" is used.



5️⃣ Storing JSX in a Variable (For Complex Conditions)

let content;
if (condition) {
  content = <p>Condition is true</p>;
} else {
  content = <p>Condition is false</p>;
}

return <div>{content}</div>;




conditional rendering with component

return(
    <div>
    {isLoggedIn ? <UserDashboard/> : <LoginForm/>}
    </div>
);