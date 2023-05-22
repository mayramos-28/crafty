

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Button, Card, Collapse, Nav, NavLink } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { PaymentsTypeComponent } from "../components/paymentComponents/PaymentsTypeComponent";
import { Outlet } from "react-router-dom";

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
        <div className="perfil ">
            
            <h2 className="text-center">Mi perfil</h2>

            <div className="row perfil-info">

                <Card className="card-perfil">
                    <Card.Body>

                        <Card.Text className="text-center ">
                            <div className={contactCollapse ? "d-none" : "d-block"}                               
                                onClick={() => setContactCollapse(!contactCollapse)}
                                aria-controls="example-collapse-text"
                                aria-expanded={contactCollapse}
                                size="lg">
                                <i class="bi bi-person-lines-fill icon-style" >  Ver datos </i>
                            </div>
                            <div className={contactCollapse ? "d-block" : "d-none"}
                                onClick={() => setContactCollapse(!contactCollapse)}
                                aria-controls="example-collapse-text"
                                aria-expanded={contactCollapse}
                                size="lg">
                                <i class="bi bi-x-lg icon-style"></i>

                            </div>
                            <Collapse in={contactCollapse}>
                                <div id="example-collapse-text">

                                    <ul>
                                        {Object.keys(authUser?.seller ?? {}).map((key) =>
                                            <li> {key}: {authUser?.seller[key]} </li>)}
                                    </ul>
                                    <ul>
                                        <li>
                                            {Object.keys(authUser?.user ?? {}).map((key) =>
                                                <li> {key}: {authUser?.user[key]} </li>)}

                                        </li>
                                    </ul>


                                </div>
                            </Collapse>
                        </Card.Text>


                    </Card.Body>
                </Card>




                <Card className="card-perfil">
                    <Card.Body>
                        <Card.Text className="text-center ">

                            <div className={paymemnt ? "d-none" : "d-block"}
                                onClick={() => setPayment(!paymemnt)}
                                aria-controls="example-collapse-text"
                                aria-expanded={paymemnt}
                                size="lg"
                            >
                                <i class="bi bi-wallet2 icon-style"> Ver métodos de pago</i>
                            </div>


                            <div className={paymemnt ? "d-block" : "d-none"}
                                onClick={() => setPayment(!paymemnt)}
                                aria-controls="example-collapse-text"
                                aria-expanded={paymemnt}
                                size="lg">
                                <i class="bi bi-x-lg icon-style"></i>

                            </div>

                            <Collapse in={paymemnt}>
                                <div id="example-collapse-text">
                                    {userId && <PaymentsTypeComponent userId={userId}></PaymentsTypeComponent>}

                                </div>
                            </Collapse>
                        </Card.Text>


                    </Card.Body>
                </Card>



                <Card className="card-perfil">
                    <Card.Body>
                        <Card.Text className="text-center ">

                            <div className={addresCollapse ? "d-none" : "d-block"}
                                onClick={() => setAddresCollapse(!addresCollapse)}
                                aria-controls="example-collapse-text"
                                aria-expanded={addresCollapse}
                                size="lg"
                            >
                                <i class="bi bi-geo-alt icon-style" > Ver Direciones  </i>
                            </div>


                            <div className={addresCollapse ? "d-block" : "d-none"}
                                onClick={() => setAddresCollapse(!addresCollapse)}
                                aria-controls="example-collapse-text"
                                aria-expanded={addresCollapse}
                                size="lg">
                                <i class="bi bi-x-lg icon-style"></i>

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



    );
}