import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { AddressFormComponent } from "./AddresFormComponente";
import { fetchAuthUser } from "../../store/slices/authUserSlice";
import { redirect, useNavigate } from "react-router-dom";

export const AddressCreateComponent = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const { authUser } = useSelector((state) => state.authUser);
    const navigate = useNavigate();

    const userId = authUser?.user?.id;
    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);


    const address = {
        'street': '',
        'number': '',
        'city': '',
        'state': '',
        'country': '',
        'zipCode': '',

    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">

                <div>
                    <AddressFormComponent key={address.id}
                        address={address}
                        onSubmit={(values) => {
                            dispatch(createAddress({ ...values, userId })).then(
                                () => navigate("/profile/addresses")
                            );
                        }}
                        label="Nueva Dirección"
                        btn="Agregar"
                    />
                </div>

            </div>

        </>
    )


};