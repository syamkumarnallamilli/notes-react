# Page Routing

Hey! "Page routing" refers to how a web application handles navigation between different pages or views based on the URL. It tells the app which content to show when the user visits a specific path.

🔍 In Simple Terms:
Page routing is like a traffic system for your website — it decides what to display when a user goes to a certain URL.

Page Reloads --- Usually involves a full page reload (in traditional websites).


Technology---  Can be done using plain HTML, backend (PHP, Java, Node), or frontend frameworks.


# React Router

React Router is a library used in React applications to handle routing — in other words, it allows you to build single-page applications (SPAs) with multiple views or pages that the user can navigate between without refreshing the page.

🛣️ What It Does:
1. Maps URLs to components.

2. Lets you navigate using links (<Link> instead of <a>).

3. Allows nested routes, protected routes, redirects, etc.

4. Keeps the UI in sync with the URL.


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

When you go to:

http://localhost:3000/ → shows Home component

http://localhost:3000/about → shows About component



🧰 Key Components in React Router:
Component	                    Purpose
<BrowserRouter>	    Wraps the app and enables routing
<Routes>	       Contains all the routes
<Route>	     Defines individual route paths and the components to render
<Link>	          Used to navigate between routes
useNavigate()	 Programmatic navigation (like redirect after login)
useParams()	    Access URL parameters like /user/:id


Tecnology---- Uses JavaScript to change the view without reloading the page.

page Reloads--- React Router uses client-side routing → no full reloads.



🔁 Example to Understand the Difference:
✅ Traditional Page Routing (HTML or Server-Side)

<a href="/about.html">About</a>

Clicking it makes a new request to the server, and a full page reload happens.

✅ React Routing (React Router)

<Link to="/about">About</Link>
Clicking it updates the URL and shows the About component — no reload.

📌 Summary:
Page routing = General term for navigation between pages.
Whole page reloads when you go to a new URL.



React routing = Routing inside React apps, handled by React Router, with smooth transitions and no reloads.
Only changes the view on the screen — no reload, feels instant.



💻 Imagine This:
You have a website like this:

www.mywebsite.com

It has 3 pages:

/home

/about

/contact

Now let’s see how Page Routing and React Routing work differently to show these pages.

🔁 1. Page Routing (Traditional Way)

✅ Used in normal websites (HTML, PHP, Java apps).

🛣️ How it works:

You click a link to /about.

The browser sends a request to the server.

Server responds with a new HTML page.

Whole page reloads.

<a href="/about.html">About</a>

🔄 Clicking this will reload the full page and show the About page.

⚛️ 2. React Routing (Using React Router)

✅ Used in React apps (single-page applications — SPAs).

🛣️ How it works:

You click a link to /about.

The page does not reload.

React just changes the content on the same page.

import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
This link changes the view instantly (faster and smoother) — no reload.


Action	   Traditional Routing	      React Routing
Click "About" link	Loads a new HTML file	Shows About component instantly
Page reload?	✅ Yes	            ❌ No
Speed	Slower	Faster
Server call?	✅ Yes	           ❌ No (after initial load)


🧠 1. <BrowserRouter>

👉 What it is:

It’s the main wrapper for all routing in your app.

💡 Think of it like:

A GPS system — it keeps track of where the user is in the app (based on URL).

🧪 Example:
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  {/* All routes and links go here */}
</BrowserRouter>

🧠 2. <Routes>
👉 What it is:
A container that holds all your **<Route>**s — like a list of paths.

🧪 Example:
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

🧠 3. <Route>

👉 What it is:
It defines the URL path and the component that should be shown.

🧪 Example:
<Route path="/about" element={<About />} />
When the user goes to /about, show the About component.

🧠 4. <Link>
👉 What it is:
Used to navigate between pages without reloading the page (better than <a>).

🧪 Example:
<Link to="/about">Go to About</Link>
When clicked, it updates the URL and shows the new component.

🧠 5. useNavigate()
👉 What it is:
A React hook used to go to another page with code (not by clicking a link).

💡 Think of it like:
Redirecting the user after login, button click, etc.

🧪 Example:
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // do login logic
    navigate('/dashboard'); // redirect to dashboard
  }

  return <button onClick={handleLogin}>Login</button>;
}

🧠 6. useParams()
👉 What it is:
A hook to get URL parameters from dynamic routes.

💡 Example:
URL: /user/42 → the number 42 is a param.

🧪 Example:
<Route path="/user/:id" element={<User />} />

import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams(); // gets the id from URL
  return <h1>User ID: {id}</h1>;
}
So if the user visits /user/5, it will show:
User ID: 5


🧾 Summary Table:
Name	Type	Purpose
BrowserRouter	Component	Wraps your app for routing
Routes	Component	Holds all the route definitions
Route	Component	Maps a path to a React component
Link	Component	Navigates between pages without reload
useNavigate()	Hook	Navigate programmatically (e.g. after login)
useParams()	Hook	Get values from dynamic URLs (e.g. :id)


✅ Summary
You have Link?	You have Route?	    Result
✅ Yes	       ✅ Yes	         Navigation and component work fine
✅ Yes	       ❌ No	            URL changes, but blank/404 page
❌ No	      ✅ Yes	            Component will never be reached



# install react-router Dom

npm install react-router-dom

