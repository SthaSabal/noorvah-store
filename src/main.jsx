import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AboutUs from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "About",
    element: <AboutUs/>
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
