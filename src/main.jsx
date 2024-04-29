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
import AuthProvider from './context/AuthProvider';
import AllArt from './pages/allArt/AllArt';
import PrivateRoute from './PrivateRoute';
import CardDetails from './shared/CardDetails';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: '/cardDetails/:id',
        element:  <PrivateRoute>
                    <CardDetails></CardDetails>
                  </PrivateRoute>,
         loader: () => fetch('http://localhost:5000/craftItem')
      },
      {
        path: '/add-craft-page',
        element: <PrivateRoute>
          <AddCraftPage></AddCraftPage>
        </PrivateRoute>
      },
      {
        path: '/all-art-craft',
        element: <AllArt></AllArt>,
        loader: () => fetch('http://localhost:5000/craftItem'),
      },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
