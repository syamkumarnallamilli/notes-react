import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalSate from './components/Hooks/context/UseContext';
import GlobalThemeContext from './components/Hooks/context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GlobalThemeContext>
  <GlobalSate>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </GlobalSate>
    </GlobalThemeContext>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
