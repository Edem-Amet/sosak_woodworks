import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from './components/services';
import About from './components/about';
import Home from './components/home';
import Products from './components/products';
import Contact from './components/contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/src/components/services.js",
    element: <Services />,
  },

  {
    path: "/src/components/about.js",
    element: <About />,
  },

  {
    path: "/src/components/contact.js",
    element: <Contact />,
  },

  {
    path: "/src/components/home.js",
    element: <Home />,
  },

  {
    path: "/src/components/products.js",
    element: <Products />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
