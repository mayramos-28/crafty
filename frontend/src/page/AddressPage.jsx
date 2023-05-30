

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Button } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { selectAddressLoading } from "../store/slices/AddressSlice";


export const AddressPage = () => {

    const firstExecution = useRef(true);  
    const dispatch = useDispatch();

    const { authUser, isLoading, error } = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    return (
        <div className="perfil gap-1 w-100">
            <div className="d-flex justify-content-end ">
                <Button className="col-3 flex-end fs-5" href={"/profile/addresses/create"} >Añadir dirección</Button>
            </div>
           <div>

           </div>      
            <AddressComponent userId={userId}></AddressComponent>
        </div>

    );
}