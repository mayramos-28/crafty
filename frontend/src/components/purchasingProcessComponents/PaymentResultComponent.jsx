import {  useSearchParams } from "react-router-dom";
import { sendPaymentIntent } from "../../api/StripeApi";
import { useEffect, useState } from "react";

import { ModalComponent } from "../ModalComponent";

export const PaymentResultComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const paymentIntent = searchParams.get("payment_intent");
    const [modalShow, setModalShow] = useState(false);

    const [order, setOrder] = useState(null)

    useEffect(() => {
        paymentIntent && sendPaymentIntent({ paymentIntent })
            .then((response) => {
                setOrder(response.order)
            });
            setModalShow(true);
    }, [paymentIntent]);
    let title = "Pedido realizado con éxito!";
    let message = "Tu pedido se ha realizado con éxito, puedes ver el estado de tu pedido en tu area de usuario";

    if (!order) {
        title = "Tu pedido no se ha realizado con éxito"
        message = "Tu pedido se ha realizado con éxito, puedes ver el estado de tu pedido en tu area de usuario"
    }



    return (
        <>
            <ModalComponent canShow={modalShow} title={title} message={message} />
        </>
    )
}