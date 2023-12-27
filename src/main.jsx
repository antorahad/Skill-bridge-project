import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/',
        element: <Courses/>
      },
      {
        path: '/',
        element: <About/>
      },
      {
        path: '/',
        element: <Pricing/>
      },
      {
        path: '/',
        element: <Contact/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
