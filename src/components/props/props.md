# What is props in React?
In React, props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only, meaning a child component cannot modify the data received from the parent.Props help make components reusable and dynamic.


📌 Ways to Pass Data Between Components in React
There are two main ways to pass data:

Direction	                Method	                                               How It Works
Parent → Child	         Using Props                                           Parent sends data via props to Child.
Child → Parent	Using a Callback Function (Props as a Function)	     Parent passes a function as a prop. Child calls it to send data back.