import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages

import Home from "./components/Home.tsx"
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Work from './components/Work.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
