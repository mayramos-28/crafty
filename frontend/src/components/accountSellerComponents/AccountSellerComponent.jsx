import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerAccount, selectAllSellerAccount } from "../../store/slices/SellerAccountSlice";
import { CreateAccountSellerComponent } from "./CreateAccountSellerComponent";
import { Button, Card, Collapse } from "react-bootstrap";
import { AccountSellerUpdateComponent } from "./AccountSellerUpdateComponent";

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
            <AccountSellerUpdateComponent sellerId={sellerId}></AccountSellerUpdateComponent>

        {/* Cambiar cuenta de pago */}
        {/* <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={open ? "d-none" : "d-block"}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    size="lg">
                                    <i class="bi bi-bag-plus  icon-style" >  Añadir cuenta de pago </i>
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
                                        <h2>Añadir nuevo </h2>
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
                    </Card> */}
        </>
    )

};