import React from "react";
import "./index.css";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Nav from "./components/Nabvar/Nav";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PhoneAdd from "./components/Add_phone/Phone_add";
import Order from "./components/Orders/Order";

const App=()=> {

  
    const router = createBrowserRouter([
      {
        path: '/',
        element: <FirstPage/>
      },
      {
        path: '/addproduct',
        element: <PhoneAdd/>
      },
      {path: '/order',
       element: <Order/>,
    }
  ]);
  
    return (
      <div>
        
        <RouterProvider router={router} />
      </div>
  )
}

export default App