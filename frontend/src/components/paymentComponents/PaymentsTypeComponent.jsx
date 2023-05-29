import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentType, selectAllPaymentType, selectPaymentTypeError, selectPaymentTypeLoading } from "../../store/slices/PaymentType";
import { CreatePaymantComponent } from "./CreatePaymantComponent";
import { Button, Col, Collapse, Row } from "react-bootstrap";
import { UpdatePaymentComponent } from "./UpdatePaymentComponent";

export const PaymentsTypeComponent = ({ userId }) => {



    const [open, setOpen] = useState(false);
    return (

        <>
            
            <Row className="gap-3">

                <Col>
                    <UpdatePaymentComponent userId={userId}></UpdatePaymentComponent>
                </Col>

                <Col sm={12} md={12} xl={12} className="d-flex flex-column justify-content-center" >


                    <Button className={open ? "d-none icon-create" : "d-block icon-create" }
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
                        className={open ? "d-block icon-create" : "d-none icon-create"}
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}

                        size="lg"
                    >
                        Ocultar formulario para añadir métodos
                    </Button>
                </Col>


            </Row>





        </>
    )
}

    ;