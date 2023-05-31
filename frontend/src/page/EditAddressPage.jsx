

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Button } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { fetchAddress, selectAddressLoading, updateAddress } from "../store/slices/AddressSlice";
import { AddressFormComponent } from "../components/addressComponents/AddresFormComponente";
import { useNavigate, useParams } from "react-router-dom";


export const EditAddressPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addressId } = useParams();
    const address = useSelector((state) => addressId && state.address.entities[addressId]);
    const {authUser} = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;

    useEffect(() => {
        console.log('userId', userId)
        userId || dispatch(fetchAuthUser());
    }, [dispatch, userId]);

    useEffect(() => {
        console.log('fetchAddress')
        userId && dispatch(fetchAddress({userId}));
    }, [dispatch, userId]);

    return (
        address && <AddressFormComponent
            address={address}
            onSubmit={(values) => {
                dispatch(updateAddress(values)).then(
                    () => navigate("/profile/addresses")
                );
            }}
            label="Dirección en "
            btn="Editar"
        />
    );
}