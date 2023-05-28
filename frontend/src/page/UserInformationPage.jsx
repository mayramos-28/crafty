

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { PaymentsTypeComponent } from "../components/paymentComponents/PaymentsTypeComponent";
import { UserInformationComponent } from "../components/userComponents/UserInformationComponent";


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
        <div className="perfil gap-2 ">

            <h2 className="text-center">Mi perfil </h2>
           
           
            <UserInformationComponent authUser={authUser} ></UserInformationComponent>

       

            <Row className="d-flex justify-content-space-between gap-2">
                <Col sm={12} md={6} xl={6}>
                    <Card className="card-perfil">
                        <Card.Body>
                            <Card.Text className="text-center ">

                                <div className={paymemnt ? "d-none" : "d-block"}
                                    onClick={() => setPayment(!paymemnt)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={paymemnt}
                                    size="lg"
                                >
                                    <i class="bi bi-wallet2 "  style={{ fontSize: '2rem', color:'rgb(104, 14, 14)'}}> Ver métodos de pago</i>
                                </div>


                                <div className={paymemnt ? "d-block" : "d-none"}
                                    onClick={() => setPayment(!paymemnt)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={paymemnt}
                                    size="lg">
                                    <i class="bi bi-x-lg"  style={{ fontSize: '2rem', color:'rgb(104, 14, 14)'}}></i>

                                </div>

                                <Collapse in={paymemnt}>
                                    <div id="example-collapse-text">
                                        {userId && <PaymentsTypeComponent userId={userId}></PaymentsTypeComponent>}

                                    </div>
                                </Collapse>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>
                <Col className="">
                    <Card className="card-perfil">
                        <Card.Body>
                            <Card.Text className="text-center ">

                                <div className={addresCollapse ? "d-none" : "d-block"}
                                    onClick={() => setAddresCollapse(!addresCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={addresCollapse}
                                    
                                >
                                    <i class="bi bi-geo-alt " style={{ fontSize: '2rem', color:'rgb(104, 14, 14)'}}> Ver Direciones  </i>
                                </div>


                                <div className={addresCollapse ? "d-block " : "d-none  btn-icon"}
                                    onClick={() => setAddresCollapse(!addresCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={addresCollapse}
                                    >
                                    <i class="bi bi-x-lg "  style={{ fontSize: '2rem', color:'rgb(104, 14, 14)'}} ></i>

                                </div>

                                <Collapse in={addresCollapse}>
                                    <div id="example-collapse-text">

                                        {
                                            userId && <AddressComponent userId={userId}></AddressComponent>
                                        }

                                    </div>
                                </Collapse>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>



    );
}