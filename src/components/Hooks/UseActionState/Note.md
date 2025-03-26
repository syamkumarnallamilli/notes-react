Understanding useActionState in React
useActionState is a new hook introduced in React 19 that simplifies state management for forms and other stateful components. It eliminates the need for useState when handling form data updates, reducing unnecessary re-renders.

Syntax of useActionState

const [state, action] = useActionState(reducerFunction, initialState);
state: The current state of the component.

action: A function that updates the state based on the reducer logic.

reducerFunction: A function that takes (prevState, newData) and returns the updated state.

initialState: The initial state of the component.

🎯 Why useActionState Over useState?
Feature	useState	useActionState
State Updates	Replaces the old state	Merges updates like Redux
Re-renders	More frequent	Optimized
Best for	Simple state	Complex forms, reducing multiple states
<!-- useActionState is useful when multiple fields need to update independently without resetting other values. -->

