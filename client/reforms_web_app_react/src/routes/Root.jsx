import UserDashboard from '../pages/UserDashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import RequestForm from '../pages/RequestForm';
import NotFound from '../pages/NotFound';


import {
    createBrowserRouter
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/userdashboard",
      element: <UserDashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
      path: "/request",
      element: <RequestForm />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
    
  ]);