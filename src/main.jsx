import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
