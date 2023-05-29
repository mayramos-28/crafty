

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
            <h2 className="text-center">Mi perfil </h2>
            <div className="d-flex justify-content-center">
                <UserInformationComponent authUser={authUser} />
            </div>


            <div className="row d-flex justify-content-center py-2">

             
                <div className="col-sm-12 col-md-8">
                    <Card className="card-perfil">
                        <Card.Body>
                            <Card.Text className="text-center ">

                                <div className={addresCollapse ? "d-none" : "d-block"}
                                    onClick={() => setAddresCollapse(!addresCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={addresCollapse}

                                >
                                    <i className="bi bi-geo-alt icon-check" style={{ fontSize: '2rem' }}> Ver Direcciones  </i>
                                </div>


                                <div className={addresCollapse ? "d-block " : "d-none  btn-icon"}
                                    onClick={() => setAddresCollapse(!addresCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={addresCollapse}
                                >
                                    <i className="bi bi-x-lg icon-check" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} ></i>

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
                </div>

            </div>


        </div>



    );
}