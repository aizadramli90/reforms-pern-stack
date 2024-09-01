import React from 'react';
import {
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { router } from './routes/Root';





function App() {
  return <RouterProvider router={router} />;
}

export default App
