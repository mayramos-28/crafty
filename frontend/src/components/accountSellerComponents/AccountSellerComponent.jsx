import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerAccount, selectAllSellerAccount } from "../../store/slices/SellerAccountSlice";
import { CreateAccountSellerComponent } from "./CreateAccountSellerComponent";
import { Button, Card, Collapse } from "react-bootstrap";

export const AccountSellerComponent = ({ sellerId }) => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const accountSeller = useSelector(selectAllSellerAccount);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchSellerAccount({ sellerId }));
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    if (accountSeller.length === 0) {
        return (
            <div>
                <p>No tienes métodos de pago activados</p>
                {sellerId && (<CreateAccountSellerComponent sellerId={sellerId}></CreateAccountSellerComponent>)}

            </div>)
    }
    return (
        <>
            <h4>Mi cuenta de pago</h4>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        {/* Cambiar cuenta de pago */}
        <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={open ? "d-none" : "d-block"}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    size="lg">
                                    <i class="bi bi-bag-plus  icon-style" >  Añadir Producto </i>
                                </div>
                                <div className={open ? "d-block" : "d-none"}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style" ></i>

                                </div>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        <h2>Añadir nuevo producto en venta</h2>
                                        {sellerId && (<CreateAccountSellerComponent sellerId={sellerId}></CreateAccountSellerComponent>)}

                                    </div>
                                </Collapse>
                                <div className={open ? "d-block" : "d-none"}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style"></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
        </>
    )

};