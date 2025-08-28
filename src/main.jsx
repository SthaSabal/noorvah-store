import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AboutUs from './pages/About.jsx'
import { Product } from './pages/Product.jsx'
import ContactUs from './pages/Contact.jsx'
import { ProductDetail } from './pages/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "About",
    element: <AboutUs />
  },
  {
    path: "Product",
    element: <Product />
  },
  {
    path: "Contact",
    element: <ContactUs />
  },
  {
    path: "ProductDetail/:id",
    element: <ProductDetail />
  },
]); 

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
