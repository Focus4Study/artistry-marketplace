import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Root from './Root';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AddCraftPage from './pages/addCraftPage/AddCraftPage';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/add-craft-page',
        element: <AddCraftPage></AddCraftPage>
      },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
