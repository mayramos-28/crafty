
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
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/my-area">Mi informacion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/purchases">Mis compras</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile/sales">Mi area de ventas
                    </Nav.Link>
                </Nav.Item>
            </Nav>


            <section className="w-100 py-2">

                <Outlet></Outlet>
            </section>


        </div>
    );
}