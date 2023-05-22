

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Button, Card, Collapse, Nav } from "react-bootstrap";
import { AddressComponent } from "../components/addressComponents/AddressComponent";
import { PaymentsTypeComponent } from "../components/paymentComponents/PaymentsTypeComponent";

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
        <div className="Perfil d-flex flex-column justify-content-center">
            <h1>Mi perfil</h1>

            <Nav defaultActiveKey="/profile" className="flex-column">
                <Nav.Link href="/sales">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>



            <div className="row d-flex gap-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>

                        <Card.Text>
                            <div className={contactCollapse ? "d-none" : "d-block"}
                                style={{ width: '18rem' }}
                                onClick={() => setContactCollapse(!contactCollapse)}
                                aria-controls="example-collapse-text"
                                aria-expanded={contactCollapse}
                                size="lg">
                                <i class="bi bi-person-lines-fill icon-style"  >  Ver datos </i>
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




                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>

                            <div className={paymemnt ? "d-none" : "d-block"}
                                onClick={() => setPayment(!paymemnt)}
                                aria-controls="example-collapse-text"
                                aria-expanded={paymemnt}
                                size="lg"
                            >
                                <i class="bi bi-geo-alt icon-style" > Ver métodos de pago  </i>
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

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>

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


{/*
useEffect(() => {
        if (open2) {
            dispatch(fetchProducts({ sellerId }))
        }
    }, [dispatch, open2]);

    
<div className="d-flex flex-column ">
<Button
className={open2 ? "d-none" : "d-block"}
    onClick={() => setOpen2(!open2)}
    aria-controls="example-collapse-text-2"
    aria-expanded={open2}
    size="lg"

>
    Ver mis productos
</Button>

<Collapse in={open2}>
    <div id="example-collapse-text-2">
        <h2>Mis productos en venta</h2>
        <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
            {
                Products.map((product) => (<CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} ></CardComponent>))

            }
        </div>
    </div>

    
</Collapse>
<Button
    className={open2 ? "d-block" : "d-none"}
    onClick={() => setOpen2(!open2)} */}
