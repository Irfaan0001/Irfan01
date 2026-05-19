/*
What is React Router?
React Router is a library that provides routing capabilities for React applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. It enables you to:

Create multiple pages in your single-page application
Handle URL parameters and query strings
Manage browser history and navigation
Create nested routes and layouts
Implement protected routes for authentication
Without a router, your React application would be limited to a single page with no way to navigate between different views.

Install React Router : npm install react-router-dom

BrowserRouter : Your application must be wrapped with the BrowserRouter component to enable routing:

Basic Routing
React Router uses three main components for basic routing:

NavLink: Creates navigation links that update the URL/ FOR NAVBAR
Link: Creates navigation links that update the URL
Routes: A container for all your route definitions
Route: Defines a mapping between a URL path and a component
Let's add navigation links and routes for each link:

Redirect:

const redirect=useNavigate();
redirect('/about');

*/




import React from 'react'
import Index from './Pages/Index'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Comoponent/Header'
import Footer from './Comoponent/Footer'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import PNF from './Pages/PNF'

function App_routing() {
  return (
    <div>
       
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Header title="Home" head="Home Page"/><Index/><Footer/></>}></Route>
                <Route path="/about" element={<><Header title="About" head="About Page"/><About/><Footer/></>}></Route>
                <Route path="/blog" element={<><Header title="Blog" head="Blog Page"/><Blog/><Footer/></>}></Route>
                <Route path="/contact" element={<><Header title="Contact" head="Contact Page"/><Contact/><Footer/></>}></Route>
                <Route path="*" element={<><PNF title="404" head="Page Not Found"/></>}></Route>
            </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App_routing