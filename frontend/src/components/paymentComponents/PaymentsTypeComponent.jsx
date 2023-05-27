import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentType, selectAllPaymentType, selectPaymentTypeError, selectPaymentTypeLoading } from "../../store/slices/PaymentType";
import { CreatePaymantComponent } from "./CreatePaymantComponent";
import { Button, Collapse } from "react-bootstrap";

export const PaymentsTypeComponent = ({ userId }) => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const paymentsType = useSelector(selectAllPaymentType);
    const error = useSelector(selectPaymentTypeError);
    const loading = useSelector(selectPaymentTypeLoading);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchPaymentType({ userId }));
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);
    console.log(paymentsType);
    if (paymentsType.length === 0) {
        return (
            <div>
                <h3>No tienes métodos de pago activados</h3>
                {userId && (<CreatePaymantComponent userId={userId}></CreatePaymantComponent>)}

            </div>)
    }
    return (
        <div>
            <h1>Mis Metodos de Pago</h1>

            <div>
                <ul>
                    {Object.keys(paymentsType ?? {}).map((key) => {
                        if (typeof paymentsType[key] === 'object' && paymentsType[key] !== null) {
                            return (
                                <li key={key}>
                                    {key}:
                                    <ul>
                                        {Object.keys(paymentsType[key]).map((innerKey) => (
                                            <li key={innerKey}>
                                                {innerKey}: {paymentsType[key][innerKey]}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        } else {
                            return (
                                <li key={key}>
                                    {key}: {paymentsType[key]}
                                </li>
                            );
                        }
                    })}
                </ul>

            </div>

            <div className="d-flex flex-column w-100 ">

                <Button className={open ? "d-none" : "d-block"}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    size="lg"
                >
                    Añadir nuevo método de pago
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">

                        {userId && (<CreatePaymantComponent userId={userId}></CreatePaymantComponent>)}


                    </div>
                </Collapse>

                <Button
                    className={open ? "d-block" : "d-none"}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}

                    size="lg"
                >
                    Ocultar formulario
                </Button>
            </div>
        </div>
    )
};