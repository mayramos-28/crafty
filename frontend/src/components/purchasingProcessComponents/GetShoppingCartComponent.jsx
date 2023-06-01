import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart, selectAllCartItems, selectCartCounter, selectCartTotalPrice } from "../../store/slices/CartSlice";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { fetchProducts, selectAllProducts } from "../../store/slices/ProductSlice";
import { craftyFileUrl } from "../../api/FileApi";
import FirsetImage from "../../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import { createOrder, selectOrderSucess } from "../../store/slices/OrderSlice";
import { GetShoppingAddressComponent } from "./GetShoppingAddresComponent";
import { fetchAuthUser } from "../../store/slices/authUserSlice";


export const GetShoppingCartComponent = ({ onProcessOrder }) => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const cartItems = useSelector(selectAllCartItems);
    const products = useSelector(selectAllProducts);
    const count = useSelector(selectCartCounter);
    const total = useSelector(selectCartTotalPrice);
    const successOrder = useSelector(selectOrderSucess);
    const [addressId, setAddressId] = useState('');
    const { authUser } = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;


    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchAuthUser());
            await dispatch(fetchShoppingCart());
            await dispatch(fetchProducts(cartItems?.productId));
        };

        if (firstExecution.current) {
            fetchData();
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution, cartItems?.productId]);

    const handelOrder = async () => {
        const order = (await dispatch(createOrder({ cartItems, count, total, addressId, userId, state: 'generated' }))).payload;
        onProcessOrder && onProcessOrder(order);
    };


    if (cartItems.length === 0) {
        return (
            <Row className="text-center">
                <p>No tienes productos en el carrito</p>
                <Button href="/">Ir a la tienda</Button>
            </Row>
        )
    }

    return (
        <Row className="">

            <h2 className="text-payment-process">Cesta de compra</h2>

            <Col sm={12} md={12} lg={12} className="gap-2">

                {cartItems.map((item) => {
                    if (item.quantity !== -1 && item.quantity !== 0) {

                        return (
                            <Row className="cart-items" key={item.id}>
                                <Col sm={11} md={8} lg={8} className="py-2">
                                    <Card>
                                        {products.map((product) => {
                                            if (product.id === item.productId) {

                                                return (
                                                    <React.Fragment key={product.id}>
                                                        <Row >
                                                            <Col className="d-flex align-items-center justify-content-center"><Card.Img variant="top" src={craftyFileUrl(product.imageId)} onError={(e) => { e.target.src = FirsetImage }} style={{ maxHeight: '50px', maxWidth: '100px' }} fluid /></Col>
                                                            <Col >
                                                                <span>Producto: {item.name}</span><br />
                                                                <span>Precio: {item.price} € </span><br />
                                                                <span>Cantidad: {item.quantity}</span><br />

                                                                <span className="icon-check" style={{ fontSize: '1.5rem' }} >Subtotal: {item.price * item.quantity} €</span><br />
                                                            </Col>
                                                        </Row>


                                                    </React.Fragment>
                                                );
                                            }
                                            return null;
                                        })}
                                    </Card>




                                </Col>
                            </Row>
                        );
                    }
                    return null;
                })}
            </Col>
            <Col sm={12} md={12} lg={12} className="cart-items" >
                <span style={{ fontSize: '1.5rem' }}>Total Productos: {count} </span>
                <span style={{ fontSize: '1.5rem' }}>Total a pagar: {total} €</span>
            </Col>



            <Col sm={12} md={12} lg={12} className="cart-items py-2" >
                
                <GetShoppingAddressComponent onChangeAddress={setAddressId} userId={userId} canChange={!successOrder} />
            </Col>

            {!successOrder && <Col sm={12} md={12} lg={12} className="d-flex justify-content-center" >
                <Button onClick={handelOrder} variant="primary" size="lg" className="my-3 d-flex justify-content-center w-50
                " block>Confirmar Productos para pago</Button>
            </Col>}
            {successOrder && 
            ( <><Col sm={12} md={12} lg={12} className="d-flex justify-content-center " >
            <i className="bi bi-check-circle icon-check" style={{ fontSize: '1.5rem' }} >Pedido confirmado</i> 
            </Col> </>)}

        </Row>
    );
};