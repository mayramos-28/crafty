

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Button } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { fetchAddress, selectAddressLoading } from "../store/slices/AddressSlice";
import { NavLink, useNavigate } from "react-router-dom";


export const AddressPage = () => {

    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authUser, isLoading, error } = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;
    const addresses = useSelector((state) => Object.values(state.address.entities));

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    useEffect(() => {
        console.log('fetchAddress')
        userId && dispatch(fetchAddress({ userId }));
    }, [dispatch, userId]);


    return (
        <div className="perfil gap-1 w-100">
            <div className="d-flex justify-content-end ">
                <Button className="flex-end" size="md" as={NavLink} to={"/profile/addresses/create"} >Añadir dirección</Button>
            </div>

            <div className="row g-0 row-cols-1 row-cols-sm-2 mt-5">

                {
                    addresses?.map(address => (
                        <div key={address.id}
                            className="col"
                        >
                            <div className=" border rounded-3 px-2 py-2 mx-3 my-3">

                                <b>Dirección: </b> {address.street}, <b>Número: </b>{address.number}
                                <br />
                                {address.country}, {address.city}, {address.zipCode}

                                <Button className="mx-5" variant="outline-dark" size="sm" as={NavLink} to={"/profile/addresses/edit/" + address.id} >Editar</Button>
                            </div>

                        </div>
                    )
                    )
                }
            </div>

        </div>

    );
}