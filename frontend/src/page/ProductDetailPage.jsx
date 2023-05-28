import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectProductById, fetchShowProduct, starHtml } from "./../store/slices/ProductSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import imgByDefault from "./../assets/image/by-default.jpg";
import { craftyFileUrl } from "../api/FileApi";
import { selectSellerById, showSeller } from "../store/slices/SellerSlice";
import { addItemToCart, removeItemFromCart } from "../store/slices/CartSlice";
import { SellerInformationPage } from "../components/sellerComponents/SellerInformationCardComponent";


export const ProductDetailPage = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const { productId } = useParams();
    const product = useSelector(state => selectProductById(state, productId))
    const sellerInformation = useSelector((state) => state.seller.seller);

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchShowProduct(productId))
            firstExecution.current = false;
        }

    }, [dispatch, firstExecution]);


    useEffect(() => {
        product && dispatch(showSeller(product.sellerId))

    }, [dispatch, product])


    const ratingStart = starHtml(product?.rating);


    const handleAddToCart = () => {
        const productItem = { productId: product?.id, name: product?.name, price: product?.price, quantity: 1 };
        dispatch(addItemToCart(productItem));
    };

    const handleRemoveFromCart = () => {
        const productItem = { productId: product?.id, name: product?.name, price: product?.price, quantity: -1 };
        dispatch(removeItemFromCart(productItem));

    };


    return (
        <Container className="py-5 flex-grow-1">

            <Row className="d-flex justify-content-center">
                <Col sm={11} md={6} lg={6}>
                    <Row>
                        <Col sm={11} md={12} lg={12} >
                            <h1 className="text-capitalize">{product?.name}</h1>

                            <span style={{ fontSize: '3rem' }} > {product?.price} €</span><br />
                            <span style={{ fontSize: '2rem', color: 'red' }} >Stock: {product?.stock}</span>
                            <p className="py-2" style={{ fontSize: '2rem' }}> {product?.description}</p>
                        </Col>
                        <Col className="text-center" style={{ fontSize: '3rem' }}>
                            <span className="" > {starHtml(product?.rating)}</span>
                            <span> / {product?.rating}</span>
                        </Col>
                    </Row>


                    <Card.Text className="d-flex justify-content-center gap-4 fs-4">
                        <i className="bi bi-cart-plus " style={{ fontSize: '5rem', color: 'green' }} onClick={() => handleAddToCart()}>  </i>
                        <i className="bi bi-cart-dash" style={{ fontSize: '5rem', color: 'red' }} onClick={() => handleRemoveFromCart()}></i>
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>




                </Col>
                <Col sm={11} md={6} lg={6}>

                    <Card.Img variant="top" src={craftyFileUrl(product?.imageId)} onError={(e) => { e.target.src = imgByDefault }} style={{}} className="py-2" fluid />

                </Col>
                <Col sm={11} md={12} lg={12}>
                <SellerInformationPage sellerInformation={sellerInformation}></SellerInformationPage>
                </Col>


            </Row>




            {/* boton que redirija a la pagina de compra */}




        </Container>
    );

};