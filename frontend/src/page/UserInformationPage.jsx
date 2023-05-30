

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { PaymentsTypeComponent } from "../components/paymentComponents/PaymentsTypeComponent";
import { UserInformationComponent } from "../components/userComponents/UserInformationComponent";
import { OrdersComponent } from "../components/OrdersComponent/OrdersComponet";


export const UserInformationPage = () => {
    const [addresCollapse, setAddresCollapse,] = useState(false);
    const [paymemnt, setPayment] = useState(false);
    const [contactCollapse, setContactCollapse,] = useState(false);
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
            <h2 className="text-center">Mis datos de usuario </h2>
            <div className="d-flex justify-content-center">
                <UserInformationComponent authUser={authUser} />
            </div>
        </div>

    );
}