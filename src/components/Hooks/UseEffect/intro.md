# useEffect

useEffect is a React Hook used to perform side effects in function components. Side effects include:

1.Fetching data from an API

2.Updating the DOM

3.Subscribing/unsubscribing to events

4.Setting up timers or intervals

Since React function components do not have lifecycle methods (like class components do), useEffect serves as a replacement for methods like:

componentDidMount

componentDidUpdate

componentWillUnmount


# Syntax of useEffect

import { useEffect } from "react";

useEffect(() => {
  // Side effect code (e.g., fetching data, updating document title)
  
  return () => {
    // Cleanup code (e.g., removing event listeners)
  };
}, [dependencies]); // Dependencies array


# Explanation of Parameters:
Callback Function (() => {})

The function inside useEffect runs when the component mounts or updates.
 
Cleanup Function (return () => {})

If provided, it runs when the component unmounts or before the effect runs again.

Dependencies Array ([])

=> Defines when the effect should re-run.

=> Empty [] → Runs only once (on mount).

=> With dependencies [var1, var2] → Runs when these values change.

=> No dependencies → Runs on every render.



# Different Ways to Use useEffect
useEffect Type	               Behavior
useEffect(() => { ... })	Runs after every render.
useEffect(() => { ... }, [])	 Runs only on mount (like componentDidMount).
useEffect(() => { ... }, [count])	Runs only when count changes (like componentDidUpdate).
useEffect(() => { return () => { ... } }, [])	Runs cleanup on unmount (like componentWillUnmount).
