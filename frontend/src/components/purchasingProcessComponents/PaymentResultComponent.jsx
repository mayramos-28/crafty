import { useNavigate, useSearchParams } from "react-router-dom";
import { sendPaymentIntent } from "../../api/StripeApi";
import { useEffect, useState } from "react";

import { ModalComponent } from "../ModalComponent";

export const PaymentResultComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const paymentIntent = searchParams.get("payment_intent");
    const [modalShow, setModalShow] = useState(false);
    const secondsToRedirect = 5;
    const navigate = useNavigate();
    const [order, setOrder] = useState(null)

    useEffect(() => {
        paymentIntent && sendPaymentIntent({ paymentIntent })
            .then((response) => {
                setOrder(response.order)
                setTimeout(() => {navigate('/')}, secondsToRedirect * 1000);
            });
    }, [paymentIntent]);


    return (
        <>
            {
                order && (
                    <div>
                        <h1 className="text-center">Pedido #{order.id} realizado con éxito!</h1>
                        <p className="text-center">Tu pedido se ha realizado con éxito, puedes ver el estado de tu pedido en tu area de usuario</p>

                        <p className="text-center">Serás redirigido en {secondsToRedirect} segundos.</p>
                    </div>
                )
            }
        </>
    )
}