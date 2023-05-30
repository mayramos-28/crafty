
import Nav from 'react-bootstrap/Nav';
import { NavLink, Navigate, Outlet } from "react-router-dom";

export const ProfilePage = () => {
    const isLogged = localStorage.getItem("token") !== null;
    if (!isLogged) return (
        <Navigate to="/login" />
    )

    return (
        <div className="w-100">
            <Nav variant="tabs" defaultActiveKey="/myArea">
                
            </Nav>


            <section className="w-100 py-2">

                <Outlet></Outlet>
            </section>


        </div>
    );
}