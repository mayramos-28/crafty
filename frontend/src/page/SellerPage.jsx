import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { fetchProducts} from "../store/slices/ProductSlice";
import {  Nav } from "react-bootstrap";

import { SellerCreateComponent } from "../components/sellerComponents/SellerCreateComponent";
import { NavLink, Outlet } from "react-router-dom";

export const SellerPage = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const { authUser, UserLoading, Usererror } = useSelector((state) => state.authUser);    
    const sellerId = authUser?.seller?.id;
    const userId = authUser?.user?.id;
    const user = authUser?.user;


    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);



    if ( !sellerId) {
        return (
            <>
                <div>
                    <h3 className="text-center">Bienvenido/a {user?.name} </h3>
                    <h4>No estás registrado como vendedor</h4>
                    <SellerCreateComponent userId={userId}></SellerCreateComponent>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-100">
                <Nav variant="tabs" >
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller">Mis datos de venta</Nav.Link>
                    </Nav.Item>                    
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/newProduct">Añadir producto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/products/seller">Mis productos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/sales">Mis ventas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/accounts">Cuentas de  cobro</Nav.Link>
                    </Nav.Item>
                </Nav>


                <section className="w-100 py-2">
                    <Outlet></Outlet>
                </section>
            </div>
         


        </>
    )
}

