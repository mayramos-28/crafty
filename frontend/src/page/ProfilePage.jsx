import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { ConsumerPage } from "./CostumerPage";

import Nav from 'react-bootstrap/Nav';
import { NavLink, Navigate, Outlet, Route } from "react-router-dom";


export const ProfilePage = () => {
   
    const isLogged = localStorage.getItem("token") !== null;

    if(!isLogged) return (
        
           <Navigate to="/login" />
        
    )
  
    return (
        <div className="loginPage">
           
            <Nav variant="tabs" defaultActiveKey="/myArea">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/my-area">Mi informacion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/purchases">Mi area de compras</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/sales">Mi area de ventas
                    </Nav.Link>
                </Nav.Item>
            </Nav>
          

            <section className="h-90">
                
                <Outlet></Outlet>
            </section>


        </div>
    );
}