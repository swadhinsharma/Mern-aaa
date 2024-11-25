import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PhoneAdd from "../../components/Add_phone/Phone_add";
import Nav from "../../components/Nabvar/Nav";
import Order from "../../components/Orders/Order";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./FirstPage.css"


const FirstPage = () => {
 

  return (
    <div>
      <Nav></Nav>
      <Sidebar/>
    </div>
  );
};

export default FirstPage;
