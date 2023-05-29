import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Input } from "../forms/Input";
import { useRef, useState } from "react";
import { createPaymentType } from "../../store/slices/PaymentType";
import { PaymentFormComponent } from "./PaymentFormComponent";

export const CreatePaymantComponent = ({ userId }) => {
    const dispatch = useDispatch();

    const paymentType = {
        type: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        userId: userId
    }

    return (
        <div className="dates-update">

            <PaymentFormComponent key={paymentType.id}
                paymentType={paymentType}
                btnValue={'Guardar'}
                onSubmit={(values) => {
                    dispatch(createPaymentType(values));
                }}
            />


        </div>

    );
};